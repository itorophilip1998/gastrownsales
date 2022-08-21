import React from 'react'

function SideBar() {
    const isActive = window.location.hash === "" ? true : false;

  return (
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header border-0">
          {/* <h5 class="modal-title">Modal title</h5> */}
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <img src="/images/Group 9.png" alt="" />
          </button>
        </div>
        <div class="modal-body">
          <ul className="navbar-nav mx-auto mt-2 mt-lg-0 sidbar-nav">
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
        </div>
      </div>
    </div>
  );
}

export default SideBar