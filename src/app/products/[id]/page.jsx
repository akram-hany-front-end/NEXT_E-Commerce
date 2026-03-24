"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Rating from "@/components/Rating";

const SingleProduct = () => {
  const { id } = useParams(); //   هنا بناخد id من الرابط
  const [liked, setLiked] = useState([]); 
  const [mainImage, setMainImage] = useState("");
  const [product, setProduct] = useState(null);
 
  
useEffect(() => {
  const saved = localStorage.getItem("favorites");
  if (saved) {
    setLiked(JSON.parse(saved));
  }
}, []);

  useEffect(() => {
    if (!id) return;
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setMainImage(data.thumbnail); //   دي المهمة
      });
  }, [id]);

 const addToCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart");
};
  const toggleLike = (id) => {
  let updated;

  if (liked.includes(id)) {
    updated = liked.filter((item) => item !== id);
  } else {
    updated = [...liked, id];
  }

  setLiked(updated);
  localStorage.setItem("favorites", JSON.stringify(updated));
};


  if (!product) return <p>Loading...</p>;


  return (
    <div className="single-product-page-container">
      <div className="single-product-container">
        <div className="single-product-img-container">
          <div className="small-image-container">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="product image"
                onClick={() => setMainImage(img)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>

<img
  className="main-img"
  src={mainImage || product.thumbnail}
  alt="image"
/>        </div>

        <div className="single-product-info-container">
          <h2>{product.title}</h2>

          <div className="single-product-price">
            <span className="actual-price">${product.price}</span>
            <span className="discount-price">${product.price + 100}</span>
          </div>

          <p className="discription-p">{product.description}</p>

          <div className="buttons-container">
<button
  className="fav"
  onClick={() => toggleLike(product.id)}
>
  {liked.includes(product.id) ? "Remove ❤️" : "Add to ❤️"}
</button>

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
    </div>
  );
};

export default SingleProduct;
