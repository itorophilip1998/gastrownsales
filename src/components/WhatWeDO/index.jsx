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
    <div className="whatwedo ">
      <div className="container ">
        <div className="row m-0 first-row text-left">
          <div className="col-md-4">
            <h3>What we Do</h3>
            <h1>Our Services</h1>
          </div>
          <div className="col-md-8 ">
            <div className="border-mix"></div>
            <p className="pl-md-5">
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
              >
                <div className="wcards-head">
                  <img src={`/images/${item.img}`} alt="" />
                </div>
                <h4 className="wcards-title">{item.title}</h4>
                <p className="wcards-body">{item.body}</p>
                <div className="wbtn-box">
                  {isHover !== key && (
                    <a href="/#" className=" shadow wcard-btn">
                      Learn More <img src="/images/Vector 2 (1).png" alt="" />
                    </a>
                  )}
                  {isHover === key && (
                    <div className="my-5">
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
