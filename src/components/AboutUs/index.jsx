import React from "react";
import Btn from "../utils/Btn";
import "./about.scss";
function AboutUs() {
  return (
    <div className="about text-md-right text-center" id="about">
      <div className="container">
        <div className="row m-0 about-first-img">
          <div className="col-md-8">
            <p className="col-md-10 ml-auto ltext">
              We are a formidable sales team with a watchword of excellence,
              results and professionaism.
            </p>
          </div>
          <div className="col-md-4 rtext">
            <div className="border-mix2 d-none d-md-block"></div>

            <h3>What we Do</h3>
            <h1>Our Services</h1>
          </div>
        </div>

        <div className="row m-0 about-box-text">
          <div className="col-md-7">
            <p>
              GastrownSales is a sales outsourcing company that is committed to
              generating leads, engagement, and sales for our clients. Our goal
              is to provide results driven sales services with an educated,
              competent and accountable team who strongly believe in client
              satisfaction. We engage the use of latest marketing methods and
              technologies to drive sales across various industries like
              Fintech, Edutech, Healthtech, etc
            </p>
            <div className="pt-md-5 mt-md5">
              <Btn text="Contact Us" width={"197.16px"} />
            </div>
          </div>
          <div className="col-md-5 d-none d-md-block">
            <img src="/images/Group 2.png" alt="" className="col-md-12" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
