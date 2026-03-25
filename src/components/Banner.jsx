import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-top">
        <div className="info-iphone">
           <span>Pro.Beyond.</span>
          <h1>IPhone 14 <span>Pro</span></h1>
          <p>Created to change everything for the better. For everyone</p>
<Link href="/products">
  <button>Shop Now</button>
</Link>          </div>
        <div className="iphone-img-container">
          
          <img src="/img/Iphone Image.png" alt="" />
        </div>

      </div>
      <div className="banner-bottom">
        <div className="banner-left">
          <div className="banner-top-bottomside">
            <div className="ps5-img">
              <img src="/img/PlayStation.png" alt="" />
            </div>
            <div className="info-ps5">
              <h3>Playstation 5</h3>
              <p>
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>
          <div className="banner-bottom-bottomside">
            <div className="air-pods">
                 <div className="air-pods-img">
              <img src="/img/Iphone 14 pro 1 (5).png" alt="" />
            </div>
            <div className="info-air-pods">
              <h3>Apple AirPods  <span>Max</span></h3>
              <p>
                Computational audio. Listen, it's powerful
              </p>
            </div>
            </div>
            <div className="apple-vision">
                   <div className="apple-vision-img">
              <img src="/img/image 36.png" alt="" />
            </div>
            <div className="info-apple-vision">
              <h3>Apple
Vision  <span>Pro</span></h3>
              <p>
                An immersive way to experience entertainment
              </p>
            </div>
            </div>
          </div>
        </div>
        <div className="banner-right">
          <div className="info-mac">
            <h2>
              Macbook <span>Air</span>
            </h2>
            <p>
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
<Link href="/products">
  <button>Shop Now</button>
</Link>            </div>
          <div className="mac-img">
            <img src="/img/MacBook Pro 14.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
  