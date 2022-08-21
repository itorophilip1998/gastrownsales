import React from "react";
import Header from "../Header";
import Btn from "../utils/Btn";
import "./hero.scss";
function Hero() {
  return (
    <div id="hero">
      <Header />

      <div className="info col-md-8 px-3 mx-auto pt-5 mt-2 text-center p-3 ">
        <h3 className="mt-5 ">
          Providing Quality Tech Sales <br /> Services in{" "}
          <span className="africa">Africa.</span>
        </h3>
        <p className="mb-5 pb-5 ">
          Our goal is to provide technical, sales and marketing services to help
          you
          <br />
          establish your business in Africa.
        </p>

        <Btn text="About Us" width="197.16px" />
      </div>
      <div className="text-center py-3">
        <img src="/images/Scroll Button.png" alt="" className="scrollDown" />
      </div>
    </div>
  );
}

export default Hero;
