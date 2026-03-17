"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(items);
  }, []);

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="cart-page">
      <Header />

      <div className="cart-container">
        <div className="shopping-cart">
          <h2>Shopping Cart</h2>

          {cart.map((item, index) => (
            <div key={index} className="item-in-cart">
              <img className="pro-cart-img" src={item.thumbnail} alt="" />

              <div className="item-cart-details-cart">
                <h4>{item.title}</h4>
                <p className="pro-code">#{item.sku}</p>
              </div>

              <div className="item-counter-in-cart">
                <span>-</span>
                <span className="num">1</span>
                <span>+</span>
              </div>

              <span className="item-price">${item.price}</span>

              <img className="x" src="/img/Close.png" alt="" />
            </div>
          ))}
        </div>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="input-container">
            <label htmlFor="promo-code">Discount code / Promo code</label>
            <input id="promo-code" placeholder="Code" type="text" />
          </div>

          <div className="subtotal space">
            <p>Subtotal</p>
            <span>${subtotal}</span>
          </div>
          <div className="estimated-tax space">
            <p>Estimated Tax</p>
            <span>$0</span>
          </div>
          <div className="estimated-tax space">
            <p>Estimated Shipping</p>
            <span>$0</span>
          </div>
          <div className="total space">
            <p>Total</p>
            <span>$</span>
          </div>
          <button> Checkout </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
