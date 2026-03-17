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
  // جلب البيانات من Fake API
 useEffect(() => {
  fetch("https://fakestoreapi.com/products?limit=8")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
      setLoading(false); // البيانات جاهزة، نوقف الـ spinner
    })
    .catch((err) => {
      console.log(err);
      setLoading(false); // حتى لو حصل خطأ، نوقف الـ spinner
    });
}, []);
  // دالة لتغيير لون القلب لكل كارد مستقل
  const toggleLike = (id) => {
    if (liked.includes(id)) {
      setLiked(liked.filter((item) => item !== id)); // شيل id لو موجود
    } else {
      setLiked([...liked, id]);                     // ضيف id لو مش موجود
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
          <div className="single-product-card" key={product.id}>
            <FontAwesomeIcon
            className="i"
              icon={faHeart}
              onClick={() => toggleLike(product.id)}
              style={{
                color: liked.includes(product.id) ? "red" : "gray",
                cursor: "pointer",
              }}
            />
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <span>${product.price}</span>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toogle;