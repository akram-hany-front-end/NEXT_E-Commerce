import React from "react";
import Link from "next/link";
const BigBanner = () => {
  return (
    <div className="big-banner-container">
       <h1>Big Summer<span>Sale</span></h1>
      <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
    <Link href="/products">
  <button className="darkmode-btn">Shop Now</button>
</Link>  
    </div>
  );
};


export default BigBanner;
