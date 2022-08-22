import React from 'react'
import Btn from '../utils/Btn';
import "./contact.scss"
function ContactUs() {
  return (
    <div className="contact-us">
      <div className="container">
        <div className="contact-info">
          <h1>
            Let’s Hear From You<span className="text-color">.</span>
          </h1>
          <p className="col-md-10 mx-auto">
            Schedule a free consultation so we can know the details of how best
            we can serve you and your business.
          </p>
        </div>

        <form className="row m-0 text-left mt-5">
          <div className="col-md-5 mx-auto mt-4">
            <label htmlFor="firstname">First Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-5 mx-auto mt-4">
            <label htmlFor="firstname">Last Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-5 mx-auto mt-4">
            <label htmlFor="firstname">First Name</label>ininn
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-5 mx-auto mt-4">
            <label htmlFor="firstname">First Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-11 col-12 mx-auto mt-4">
            <label htmlFor="firstname">First Name</label>

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="form-control"
            ></textarea>
          </div>
          <div className="col-12 text-center mt-5 pt-4">
            <Btn text="Contact Us" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs