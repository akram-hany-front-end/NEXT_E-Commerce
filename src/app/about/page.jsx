"use client";
import React from "react";

const AboutPage = () => {
  return (
    <div className="page">
      <div className="card">
        <h1>About Cyber</h1>

        <p>
          Cyber is a modern e-commerce store focused on delivering high-quality
          tech products with a fast and smooth shopping experience.
        </p>

        <p>
          We build our platform using modern web technologies like Next.js to
          ensure speed, security, and reliability.
        </p>

        <p>
          Our goal is to make online shopping simple, modern, and enjoyable for everyone.
        </p>

        <div className="features">
          <div> Fast Performance</div>
          <div> Secure Payments</div>
          <div> Easy Shopping</div>
        </div>
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
          max-width: 800px;
          background: #ffffff;
          padding: 30px;
          border-radius: 4px;
 
          }

        h1 {
          color: #000000;
          margin-bottom: 20px;
          font-size: 32px;
        }

        p {
          color: #000000b4;
          line-height: 1.7;
          margin-bottom: 12px;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 20px;
        }

        .features div {
          background: #000000;
          padding: 12px;
          border-radius: 10px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
