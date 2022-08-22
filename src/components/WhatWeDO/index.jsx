import React, { useState } from "react";
import Btn from "../utils/Btn";
import "./whatwedo.scss";

const whatwedo = [
  {
    title: `Software Sales and\nMarketing`,
    body: "We deliver proven digital and traditonal marketing strategies to achieve optimal sales and improve overall revenue",
    img: "Group 10 (1).png",
  },
  {
    title: `African Market \nPenetration`,
    body: "Drive your products into an existing African market. Expand into new market segments and industries increasing engagement, conversion and sales.",
    img: "Group 11.png",
  },
  {
    title: "Sales Consulting and Training",
    body: "Receive comprehensive and actionable strategy and training guaranteed to grant you result in sales performance.",
    img: "Group 12.png",
  },
];
function WhatWeDo() {
  const [isHover, setIsHover] = useState(1);
  return (
    <div className="whatwedo " id="services">
      <div className="container ">
        <div className="row m-0 first-row text-md-left text-center">
          <div className="col-md-4">
            <h3 data-aos="fade-right">What we Do</h3>
            <h1 data-aos="fade-right">Our Services</h1>
          </div>
          <div className="col-md-8 ">
            <div className="border-mix d-none d-md-block"></div>
            <p className="pl-md-5" data-aos="fade-left">
              As a culture, we are committed to providing the best sales
              services for your business and product: Building your brand
              awareness and improving your revenue
            </p>
          </div>
        </div>

        <div className="second-row ">
          {whatwedo &&
            whatwedo.map((item, key) => (
              <div
                className="whatwedo-cards "
                key={key}
                onMouseOver={(e) => setIsHover(key)}
                data-aos="flip-up"
                data-aos-delay={100 + (key + 1) * 100}
              >
                <div className="wcards-head">
                  <img src={`/images/${item.img}`} alt="" />
                </div>
                <h4 className="wcards-title">{item.title}</h4>
                <p className="wcards-body">{item.body}</p>
                <div className="wbtn-box">
                  {isHover !== key && (
                    <a
                      href="/#"
                      className=" shadow wcard-btn"
                      data-aos="fade-up"
                    >
                      Learn More <img src="/images/Vector 2 (1).png" alt="" />
                    </a>
                  )}
                  {isHover === key && (
                    <div className="my-5" data-aos="fade-up">
                      <Btn text="Learn More " isImg={true} width="197.16px" />
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
