import React from "react";
import Header from "../Header";
import Btn from "../utils/Btn";
import "./hero.scss";
function Hero() {
  return (
    <div id="hero">
      <Header />

      <div className="info">
        <h3>Providing Quality Tech Sales Services in Africa.</h3>
        <p>
          Our goal is to provide technical, sales and marketing services to help
          you establish your business in Africa.
        </p>

        <Btn text="About Us" width="197.16px" />
      </div>
      <img src="/images/Scroll Button.png" alt="" />
    </div>
  );
}

export default Hero;
