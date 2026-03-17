import React from "react";
 
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="first-col">
        <div className="info-footer">
          <img src="/img/Logo white.svg" alt="" />
          <p>
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>

        <div className="social-footer-container">

 <img src="/img/Twitter.png" alt="Twitter" />
 <img src="/img/Facebook.png" alt="Facebook" />
 <img src="/img/Tiktok.png" alt="Tiktok" />
 <img src="/img/Instagram.png" alt="Instagram" />
        </div>
      </div>
      <div className="second-col">
        <h6>Services</h6>
        <p>Bonus program</p>
        <p>Gift cards</p>
        <p>Credit and payment</p>
        <p>Service contracts</p>
        <p>Non-cash account</p>
        <p>Payment</p>
      </div>
      <div className="third-col">
        <h6>Assistance to the buyer</h6>
        <p>Find an order</p>
        <p>Terms of delivery</p>
        <p>Exchange and return of goods</p>
        <p>Guarantee</p>
        <p>Frequently asked questions</p>
        <p>Terms of use of the site</p>
      </div>
    </div>
  );
};

export default Footer;
