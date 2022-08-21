import React from "react";
import "./partners.scss"
const images = [
  "synology_white_1 1.png",
  "Kontur_white_1 1.png",
  "twin_white_1 1.png",
  "netspice_white_1 1.png",
  "area_white_1 1.png",
  "ITBREWERY_LOGO_1 1.png",
];
function TrustedPartners() {
  return (
    <div className="partners text-center">
      <h6>Trusted by Partners Globally</h6>
      <div className="d-none d-lg-block">
        {images &&
          images.map((img, key) => (
            <img
              src={`/images/${img}`}
              key={key}
              alt=""
              className="mx-md-4 mx-auto"
            />
          ))}
      </div>

      <div className="row m-0 d-lg-none  ">
        {images &&
          images.map((img, key) => (
            <div className="col-4 py-3">
              <img src={`/images/${img}`} key={key} alt="" className="" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default TrustedPartners;
