import React from "react";
import Btn from "../utils/Btn";
import "./about.scss";
function AboutUs() {
  return (
    <div className="about text-md-right text-center" id="about">
      <div className="container">
        <div className="row m-0 about-first-img">
          <div className="col-md-8">
            <p className="col-md-10 ml-auto ltext" data-aos="fade-down-right">
              We are a formidable sales team with a watchword of excellence,
              results and professionaism.
            </p>
          </div>
          <div className="col-md-4 rtext">
            <div className="border-mix2 d-none d-md-block"></div>

            <h3 data-aos="fade-up">WHO WE ARE</h3>
            <h1 data-aos="fade-left">About Us</h1>
          </div>
        </div>

        <div className="row m-0 about-box-text">
          <div className="col-md-7">
            <p data-aos="fade-down-right" data-aos-delay="300">
              GastrownSales is a sales outsourcing company that is committed to
              generating leads, engagement, and sales for our clients. Our goal
              is to provide results driven sales services with an educated,
              competent and accountable team who strongly believe in client
              satisfaction. We engage the use of latest marketing methods and
              technologies to drive sales across various industries like
              Fintech, Edutech, Healthtech, etc
            </p>
            <div className="pt-md-5 mt-md5" data-aos="fade-right" data-aos-delay="400">
              <Btn text="Contact Us" width={"197.16px"} />
            </div>
          </div>
          <div className="col-md-5 d-none d-md-block">
            <img src="/images/Group 2.png" data-aos="flip-right" alt="" className="col-md-12" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
