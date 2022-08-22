import React from "react"; 
import "./footer.scss"
function Footer() {
  return (
    <div className="footer">
      <div className="container text-left">
        <div className="row m-0">
          <div className="col-md-3">
            <div className="f1">
              <p className="head-text" data-aos="fade-right">
                Contact Number
              </p>
              <p className="body-text" data-aos="fade-up" data-aos-delay="400">
                +234 801 123 2345
              </p>
            </div>
            <div className="f2">
              <p className="head-text" data-aos="fade-right">
                ADDRESS
              </p>
              <p className="body-text" data-aos="fade-up" data-aos-delay="400">
                No. 5, Engr Maxwell Adoki Street, Off Peter Odil Road, Port
                Harcourt, Nigeria
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="f3">
              <p className="head-text" data-aos="fade-right">
                EMAIL ADDRESS
              </p>
              <p className="body-text" data-aos="fade-up" data-aos-delay="400">
                info@gastrownsales.com
              </p>
            </div>
            <div className="f4">
              <p className="head-text" data-aos="fade-right">
                LEGAL INFO
              </p>
              <p className="body-text" data-aos="fade-up" data-aos-delay="400">
                PRIVACY POLICY <br /> LEGAL IMPRINT
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="f5">
              <p className="head-text">VisIT US</p>
              <p className="body-text2" data-aos="fade-up" data-aos-delay="400">
                Visit Our Social Media
              </p>
              <div className="links" data-aos="fade-left" data-aos-delay="400">
                <img src="/images/Group 13.png" alt="" />
                <img src="/images/Group 14.png" alt="" />
                <img src="/images/Group 15 (1).png" alt="" />
                <img src="/images/Group 16.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="copyright text-left">
          &copy;2022 <img src="/images/GastrownSales. (1).png" alt="" />
        </div>
      </div>
      <img
        src="/images/Scroll Button (1).png"
        alt=""
        className="scrollToTop link "
      />
    </div>
  );
}

export default Footer;
