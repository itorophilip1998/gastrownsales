import React from "react";
import Header from "../Header";
import Btn from "../utils/Btn";
import "./hero.scss";
function Hero() {
  return (
    <div id="hero">
      <Header />

      <div className="info col-md-8 px-3 mx-auto pt-5 mt-5">
        <h3 className="mt-5">
          Providing Quality Tech Sales <br /> Services in{" "}
          <span className="africa">Africa.</span>
        </h3>
        <p className="mb-3">
          Our goal is to provide technical, sales and marketing services to help
                  you
                  <br/>
                  establish your business in Africa.
        </p>

        <Btn text="About Us" width="197.16px" />
      </div>
      <img src="/images/Scroll Button.png" alt="" className="scrollDown" />
    </div>
  );
}

export default Hero;
