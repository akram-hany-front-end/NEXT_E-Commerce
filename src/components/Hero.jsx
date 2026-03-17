"use client";
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
      // جلب البيانات من Fake API
     useEffect(() => {
      fetch("https://fakestoreapi.com/products")
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
    <div className="two-section-container">
      <div className="hero-container">
        <div className="hero-card cardwhite">
          <img src="/img/Group 1 (1).png" alt="" />
          <h2>Popular Products</h2>
          <p>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button>Shop Now</button>
        </div>
        <div className="hero-card dark">
          <img src="/img/image 64.png" alt="" />
          <h2>Ipad Pro</h2>

          <p>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button>Shop Now</button>
        </div>
        <div className="hero-card darker">
          <img src="/img/image 41.png" alt="" />
          <h2>Samsung Galaxy</h2>

          <p>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button>Shop Now</button>
        </div>
        <div className="hero-card linear">
          <img src="/img/Macbook 1.png" alt="" />
          <h2>Macbook Pro</h2>

          <p>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="darkmode-btn">Shop Now</button>
        </div>
      </div>
      <div className="discount-container">
        <h2>Discounts up to -50%</h2>
        <div className="product-card-container">
                {products.slice(0,4).map((product) => (
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
    </div>
  );
};

export default Hero;
