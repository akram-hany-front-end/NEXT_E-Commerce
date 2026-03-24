"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  //  نجيب الـ IDs من localStorage
  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  //  نجيب كل المنتجات
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/category/smartphones");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  //  نفلتر المنتجات اللي اتحفظت
  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>❤️ My Favorites</h2>

      {favoriteProducts.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div className="product-card-container">
          {favoriteProducts.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div className="single-product-card">
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
                <span>${product.price}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;