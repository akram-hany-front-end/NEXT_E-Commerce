"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Toogle = () => {
const pathname = usePathname();

  const toogleLinks = [
    { href: "/", label: "New Arrival" },
    { href: "/bestseller", label: "Bestseller" },
    { href: "/featuredproduct", label: "Featured Products" },
  ];

  // state للمنتجات
  const [products, setProducts] = useState([]);
  // state للقلوب المفعلة
const [liked, setLiked] = useState([]);
  // state loader
const [loading, setLoading] = useState(true);
useEffect(() => {
  const saved = localStorage.getItem("favorites");
  if (saved) {
    setLiked(JSON.parse(saved));
  }
}, []);
  // جلب البيانات من Fake API
      useEffect(() => {
  const getPhones = async () => {
    try {
      const res = await fetch(
        "https://dummyjson.com/products/category/smartphones?limit=8"
      );
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  getPhones();
}, []);

if (loading) {
  return (
    <div className="loading">
      <h2>Loading...</h2>
    </div>
  );
}
  // دالة لتغيير لون القلب لكل كارد مستقل
const toggleLike = (id) => {
  let updated;

  if (liked.includes(id)) {
    updated = liked.filter((item) => item !== id);
  } else {
    updated = [...liked, id];
  }

  setLiked(updated);

  if (typeof window !== "undefined") {
    localStorage.setItem("favorites", JSON.stringify(updated));
  }
};
  return (
    <div className="toogle-container">
      <div className="toogle-links">
        {toogleLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}
      </div>

     <div className="product-card-container">
                  {products.map((product) => (
                   <Link href={`/products/${product.id}`} key={product.id}>
      <div className="single-product-card">
    
        <FontAwesomeIcon
          className="i"
          icon={faHeart}
          onClick={(e) => {
            e.preventDefault(); // يمنع فتح الصفحة لما تضغط القلب
            toggleLike(product.id);
          }}
          style={{
            color: liked.includes(product.id) ? "red" : "gray",
            cursor: "pointer",
          }}
        />
    
        <img src={product.thumbnail} alt={product.title} />
    
        <p>{product.title}</p>
    
        <span>${product.price}</span>
    
        <button>Buy Now</button>
    
      </div>
    </Link>
                  ))}
                </div>
    
    </div>
  );
};

export default Toogle;