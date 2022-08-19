import React from "react";
import Btn from "../utils/Btn";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-transparent pt-5">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/images/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
              <li className="nav-item ">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/#whyus">
                  Why Us
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/#services">
                  Services
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/#about">
                  About Us
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0" >
              <Btn text="Contact Us" width="197.16px" />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
