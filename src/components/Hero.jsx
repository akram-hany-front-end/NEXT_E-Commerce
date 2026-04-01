"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Hero = () => {
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
          "https://dummyjson.com/products/category/smartphones?limit=8",
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
    <div className="two-section-container">
      <div className="hero-container">
        <div className="hero-card cardwhite">
          <img src="/img/Group 1 (1).png" alt="" />
          <h2>Popular Products</h2>
          <p>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <Link href="/products">
            <button>Shop Now</button>
          </Link>
        </div>
        <div className="hero-card dark">
          <img src="/img/image 64.png" alt="" />
          <h2>Ipad Pro</h2>
          <p>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <Link href="/products">
            <button>Shop Now</button>
          </Link>{" "}
        </div>
        <div className="hero-card darker">
          <img src="/img/image 41.png" alt="" />
          <h2>Samsung Galaxy</h2>

          <p>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <Link href="/products">
            <button>Shop Now</button>
          </Link>
        </div>
        <div className="hero-card linear">
          <img src="/img/Macbook 1.png" alt="" />
          <h2>Macbook Pro</h2>

          <p>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <Link href="/products">
            <button className="darkmode-btn">Shop Now</button>
          </Link>
        </div>
      </div>
      <div className="discount-container">
        <h2>Discounts up to -50%</h2>
        <div className="product-card-container">
          {products.map((product) => (
         <Link href={`/products/${product.id}`} className="single-product-card" key={product.id}>
  <img src={product.thumbnail} alt={product.title} />

  <p>{product.title}</p>
  <span>${product.price}</span>

  <FontAwesomeIcon
    className="i"
    icon={faHeart}
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleLike(product.id);
    }}
    style={{
      color: liked.includes(product.id) ? "red" : "gray",
      cursor: "pointer",
    }}
  />

  <button>Buy Now</button>
</Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
