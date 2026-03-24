"use client";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(items);
  }, []);
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

const removeItem = (id) => {
  const updated = cart.filter((item) => item.id !== id);
  setCart(updated);
  localStorage.setItem("cart", JSON.stringify(updated));
};
const shipping = subtotal > 0 ? 30 : 0;
  const tax = subtotal * 0.02;
  const total = subtotal + shipping + tax;
  const updateQuantity = (id, type) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        if (type === "inc") {
          return { ...item, quantity: item.quantity + 1 };
        } else if (type === "dec" && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="shopping-cart">
          <h2>Shopping Cart</h2>

          {cart.map((item) => (
            <div key={item.id} className="item-in-cart">
              <img className="pro-cart-img" src={item.thumbnail} alt="" />
              <div className="item-cart-details-cart">
                <h4>{item.title}</h4>
                <p className="pro-code">#{item.sku}</p>
              </div>
              <div className="item-counter-in-cart">
                <span onClick={() => updateQuantity(item.id, "dec")}>-</span>
<span className="num">{item.quantity || 1}</span>                <span onClick={() => updateQuantity(item.id, "inc")}>+</span>
              </div>
              <span className="item-price">
  ${(item.price * item.quantity).toFixed(2)}
</span>
              <img
                className="x"
                src="/img/Close.png"
                alt="Remove"
                onClick={() => removeItem(item.id)}
              />{" "}
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
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="estimated-tax space">
            <p>Estimated Tax (2%)</p>
            <span>${tax.toFixed(2)}</span>
          </div>

          <div className="estimated-tax space">
            <p>Shipping</p>
            <span>${shipping}</span>
          </div>

          <div className="total space">
            <p>Total</p>
            <span>${total.toFixed(2)}</span>
          </div>
          <button> Checkout </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
