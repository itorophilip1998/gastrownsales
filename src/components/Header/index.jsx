import React from "react";
import SideBar from "../SideBar";
import Btn from "../utils/Btn";

function Header() {
    
    const isActive = window.location.hash === '' ? true : false;
    
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent pt-5">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/images/logo.png" alt="" />
          </a>

          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="modelId"
            tabindex="-1"
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <SideBar/>
          </div>
          <button
            className="btn border-0 btn-transparent shadow-none d-block d-lg-none"
            type="button"
            data-toggle="modal"
            data-target="#modelId"
          >
            <img src="/images/Vector (7).png" alt="" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
              <li className="nav-item  ">
                <a className={`nav-link ${isActive ? "active" : ""}`} href="/">
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
            <form className="form-inline my-2 my-lg-0">
              <Btn text="Contact Us" width="197.16px" />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
