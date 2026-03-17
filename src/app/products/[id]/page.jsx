"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Rating from "@/components/Rating";

const SingleProduct = () => {
  const { id } = useParams(); // 👈 هنا بناخد id من الرابط

  const [product, setProduct] = useState(null);
  useEffect(() => {
    if (!id) return;

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const addToCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart");
};

  if (!product) return <p>Loading...</p>;

  return (
    <div className="single-product-page-container">
      <Header />

      <div className="single-product-container">
        <div className="single-product-img-container">
          <div className="small-image-container">
            {product.images.map((img, index) => (
              <img key={index} src={img} alt="product image" />
            ))}
          </div>

          <img className="main-img" src={product.thumbnail} alt="" />
        </div>

        <div className="single-product-info-container">
          <h2>{product.title}</h2>

          <div className="single-product-price">
            <span className="actual-price">${product.price}</span>
            <span className="discount-price">${product.price + 100}</span>
          </div>

          <p className="discription-p">{product.description}</p>

          <div className="buttons-container">
            <button className="fav">Add to Favorite</button>
            <button className="add" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="reviews-container">
        <h1>Reviews</h1>

        {product.reviews.map((review, index) => (
          <div key={index} className="single-review-card">
            <span>{review.reviewerName}</span>

            <Rating rating={review.rating} />

            <p>{review.comment}</p>

            <p>{review.reviewerEmail}</p>

            <p>{new Date(review.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default SingleProduct;
