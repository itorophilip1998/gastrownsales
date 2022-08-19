import React from "react";
import "./partners.scss"
const images = [
  "synology_white_1 1.png",
  "",
  "twin_white_1 1.png",
  "netspice_white_1 1.png",
  "area_white_1 1.png",
  "ITBREWERY_LOGO_1 1.png",
];
function TrustedPartners() {
  return (
    <div className="partners">
      <h6>Trusted by Partners Globally</h6>
      {images && images.map((img, key) => <img src={`/images/${img}`} key={key} alt="" className="mx-4" />)}
    </div>
  );
}

export default TrustedPartners;
