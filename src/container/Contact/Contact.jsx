import React, { useRef, useState } from "react";
import "./Contact.scss";
import { images } from "../../constants";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user_name, user_email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    //e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_TOKEN
      )
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((error) => console.log(error.text));

    //e.target.reset();
  };

  return (
    <div id="contact">
      <h2 className="header-text">Contact Me</h2>
      <div className="app__contact">
        <div className="app__contact-cards">
          <div className="app__contact-card">
            <img src={images.email} alt="email" />
            <a
              href="mailto: ralphtattooing@gmail.com"
              className="app__contact-text"
            >
              ralphtattooing@gmail.com
            </a>
          </div>
          <div className="app__contact-card">
            <img src={images.phone} alt="phone" />
            <a href="tel: +1 (555) 555-5555" className="app__contact-text">
              +1 (555) 555-5555
            </a>
          </div>
        </div>

        {!isFormSubmitted ? (
          <form ref={form} className="app__contact-form">
            <div>
              <input
                type="text"
                name="user_name"
                value={user_name}
                placeholder="Name"
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <input
                type="email"
                name="user_email"
                value={user_email}
                placeholder="Email"
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                name="message"
                value={message}
                placeholder="Message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" onClick={sendEmail}>
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </form>
        ) : (
          <div>
            <h3 className="app__form-sent-text">
              Thank you for getting in touch.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
