"use client";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Category = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");  
  const [priceRange, setPriceRange] = useState([0, 2000]);  

 
  const [products, setProducts] = useState([]);
   
  const [liked, setLiked] = useState([]);  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      setLiked(JSON.parse(saved));
    }
  }, []);
   

  useEffect(() => {
    const getPhones = async () => {
      try {
        const res = await fetch(
          "https://dummyjson.com/products/category/smartphones?limit=50",
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

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  const filteredProducts = products
    .filter((product) =>
      selectedBrand
        ? product.brand.toLowerCase() === selectedBrand.toLowerCase()
        : true,
    )
    .filter((product) =>
      searchTerm
        ? product.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true,
    )
    .filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1],
    );

  return (
    <div className="cat-page-container">
      <div className="category-container">
        <div className="filter">
          <h3>Brand</h3>

          <div className="filter-search-box">
            <FontAwesomeIcon icon={faSearch} className="search-icon-filter" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="check-box-container">
            <div
              className="checkbox-filter"
              onClick={() => setSelectedBrand("apple")}
            >
              <input
                type="checkbox"
                checked={selectedBrand === "apple"}
                readOnly
              />
              <p>Apple</p>
            </div>
            <div
              className="checkbox-filter"
              onClick={() => setSelectedBrand("oppo")}
            >
              <input
                type="checkbox"
                checked={selectedBrand === "oppo"}
                readOnly
              />
              <p>OPPO</p>
            </div>
            <div
              className="checkbox-filter"
              onClick={() => setSelectedBrand("realme")}
            >
              <input
                type="checkbox"
                checked={selectedBrand === "realme"}
                readOnly
              />
              <p>Realme</p>
            </div>
            <div
              className="checkbox-filter"
              onClick={() => setSelectedBrand("samsung")}
            >
              <input
                type="checkbox"
                checked={selectedBrand === "samsung"}
                readOnly
              />
              <p>SAMSUNG</p>
            </div>
            <div
              className="checkbox-filter"
              onClick={() => setSelectedBrand("vivo")}
            >
              <input
                type="checkbox"
                checked={selectedBrand === "vivo"}
                readOnly
              />
              <p>Vivo</p>
            </div>
            <div className="checkbox-filter">
              <button
                onClick={() => setSelectedBrand("")} // مسح الفلتر
                className="all-products-btn"
              >
                All Products
              </button>
            </div>
          </div>
          <div className="price-filter">
            <h4>Price</h4>
            <input
              type="range"
              min="0"
              max="2500"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            />
            <p>
              ${priceRange[0]} - ${priceRange[1]}
            </p>
          </div>
        </div>

        <div className="product-card-container">
          {filteredProducts.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div className="single-product-card">
                <FontAwesomeIcon
                  className="i"
                  icon={faHeart}
                  onClick={(e) => {
                    e.preventDefault();  
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
    </div>
  );
};

export default Category;
