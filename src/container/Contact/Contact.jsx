import React from "react";
import "./Contact.scss";
import { images } from "../../constants";

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="header-text">Contact Me</h2>
      <div className="app__contact">
        <div className="app__contact-cards">
          <div className="app__contact-card">
            <img src={images.email} alt="email" />
            <a href="mailto: ctruss501@gmail.com" className="app__contact-text">
              ctruss501@gmail.com
            </a>
          </div>
          <div className="app__contact-card">
            <img src={images.phone} alt="phone" />
            <a href="tel: +1 (330) 921-1076" className="app__contact-text">
              +1 (330) 921-1076
            </a>
          </div>
        </div>
        <div className="app__contact-form">
          <div className="">
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="">
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="">
            <textarea name="message" placeholder="Message" />
          </div>
          <button type="button">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
