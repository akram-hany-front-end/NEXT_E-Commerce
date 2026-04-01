"use client";
import React from "react";
import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cyber Contact:", form);
    alert("Message sent successfully 🚀");

    setForm({ name: "", email: "", message: "" });
  };
  return ( 
    <div className="page">
      <div className="card">
        <h1>Contact Cyber</h1>
        <p>Send us a message and we will reply soon.</p>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit">Send Message</button>
        </form>
      </div>

      <style jsx>{`
        .page {
        display: flex;
          justify-content: center;
          align-items: center;
          background: #ffffff;
          padding: 20px;
          color: white;
        }

        .card {
          width: 800px;
          background: #ffffff;
          padding: 30px;
          border-radius: 15px;

          }

        h1 {
          color: #000000;
          margin-bottom: 10px;
        }

        p {
          color: #000000d5;
          margin-bottom: 20px;
        }

        input,
        textarea {
          width: 60%;
          padding: 12px;
          margin-bottom: 12px;
          border-radius: 8px;
          border: 1px solid #000000;
          background: #ffffff;
          color: white;
          outline: none;
        }

        textarea {
          height: 120px;
          resize: none;
        }

        button {
          width: 200px;
          font-size: 20px;
          display: block;
          padding: 12px;
          background: #000000;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        button:hover {
          background: #000000e0;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
