import React from "react";
import "./whygastrown.scss";

const whyDb = [
  {
    title: "Strong Sales Team",
    body: `A solid team of sales professionals committed 
to delivering real results for customers and partners`,
        img: "Vector (8).png",
    
  },
  {
    title: "Optimized Sales Process",
    body: `Lead generation and customer acquisition strategies guaranteed to increase sales.`,
    img: "clarity_process-on-vm-line.png",
  },
  {
    title: "Flexible Pricing Plan",
    body: `We run a cost effective service affordable for both startups and SMEs. You pay per work needed done.`,
    img: "Vector (9).png",
  },
];
function WhyGastrwonSales() {
  return (
    <div className="whynah mt-5 pt-5 container">
      <div className="col-md-10  mx-auto">
        <h2>Why GastrownSales?</h2>
        <p className="secondMsg">
          We have been doing business in Africa and have established strong
          relationships with suppliers and clients. We help companies navigate
          market constraints to become successful in Africa.
        </p>
      </div>
      <div className="row m-0 card-container">
        {whyDb &&
          whyDb.map((item, key) => (
            <div className="col-md-4" key={key}>
              <div className="cards-img-box">
                <img src={`/images/${item.img}`} alt="" />
              </div>
              <div className="cards-box">
                <h5 className="cards-title">{item.title}</h5>
                <p className="cards-body">{item.body}</p>
              </div>
             { key!==0 && <img src="/images/Arrow 1.png" alt=""  className="lineImg"/>}
            </div>
          ))}
      </div>
    </div>
  );
}

export default WhyGastrwonSales;
