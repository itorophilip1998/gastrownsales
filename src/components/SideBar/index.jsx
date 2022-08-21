import React from "react";

function SideBar() {
  const isActive = window.location.hash === "" ? true : false;
  const closeBtn = (route) => {
    window.location.href = route;
    // window.location.reload();

  };
  return (
    <div class="modal-dialog" role="document">
      <div class="modal-content  ">
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
              <a
                data-dismiss="modal"
                className={`nav-link ${isActive ? "active" : ""}`}
                onClick={(e) => closeBtn("/#whyus")}
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a
                data-dismiss="modal"
                className="nav-link"
                onClick={(e) => closeBtn("/#whyus")}
                href="/#whyus"
              >
                Why Us
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link"
                onClick={(e) => closeBtn("/#services")}
                href="/#services"
                data-dismiss="modal"
              >
                Services
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link"
                data-dismiss="modal"
                onClick={(e) => closeBtn("/#about")}
                href="/#about"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
