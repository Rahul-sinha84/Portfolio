import React, { useState } from "react";
import mailImg from "../assets/mail.svg";
import phoneImg from "../assets/phone.svg";
import { Btn1 } from "../components/btn";
import emailjs from "emailjs-com";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = async () => {
    if (!firstName || !lastName || !email || !message) {
      return alert("Please fill all the values...");
    }
    const target = {
      firstName,
      lastName,
      email,
      message,
    };
    await emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        target,
        process.env.REACT_APP_USER_ID
      )
      .then((response) => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        alert(
          "Email has been successfully sent, I will get back to you soon..."
        );
      })
      .catch((err) => {
        alert("Something went wrong !!, Please try again later...");
      });
  };
  return (
    <div id="contactMe" className="contact">
      <div className="contact__container">
        <div className="contact__container--title gradient-text">
          CONTACT ME
        </div>
        <div className="contact__container--container">
          <div className="contact__container--container--left">
            <div className="contact__container--container--left__title">
              Get in touch
            </div>
            <div className="contact__container--container--left__sub-title para">
              Have a project in mind? or a position to fill in? Looking to
              partner or work together? Reach out through the form and I'll get
              back to you soon.
            </div>
            <div className="contact__container--container--left__info">
              <div className="contact__container--container--left__info--item">
                <img src={mailImg} alt="mail-img" />
                <a href="mailto:rahul.sinha1562001@gmail.com" className="para">
                  rahul.sinha1562001@gmail.com
                </a>
              </div>
              <div className="contact__container--container--left__info--item">
                <img src={phoneImg} alt="phone-img" />
                <a href="tel:+918400916198" className="para">
                  +91 8400916198
                </a>
              </div>
              <div className="contact__container--container--left__info--social">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Rahul-sinha84"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#777"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/rahul-sinha84/"
                >
                  <svg
                    fill="#777"
                    stroke="#777"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="48"
                    height="48"
                  >
                    {" "}
                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://devfolio.co/@Rahul001"
                >
                  <svg
                    id="esDzvHdEw7j1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 60.5 66.18"
                    stroke="#777"
                    fill="#777"
                    width="45"
                    height="45"
                  >
                    <g
                      id="esDzvHdEw7j2"
                      transform="matrix(1 0 0 1 -0.04 0.000947)"
                    >
                      <path
                        id="esDzvHdEw7j3"
                        d="M60.33,36.44C60.3,52,48.61,64.74,33.76,66C33.76,66,14.69,66.49,8.37,65.93C6.019075,65.642364,4.003319,64.115276,3.09,61.93C3.968432,62.357324,4.917151,62.62161,5.89,62.71C7.96,62.89,11.49,62.98,16.41,62.98C23.64,62.98,31.48,62.78,31.56,62.78L31.7,62.78C39.563323,62.105827,46.873456,58.457913,52.14,52.58C56.648058,47.591643,59.495851,41.326498,60.29,34.65C60.32,35.22,60.33,35.83,60.33,36.44Z"
                        transform="matrix(1 0 0 1 0 -0.000913)"
                        stroke-width="1"
                        stroke-miterlimit="1"
                      />
                      <path
                        id="esDzvHdEw7j4"
                        d="M58,29.95C58,45.51,46.28,58.24,31.43,59.48C31.43,59.48,12.36,59.98,6.04,59.42C2.65,59.12,0.11,55.87,0.04,52.28L0.1,7.33C0.2,3.74,2.75,0.5,6.15,0.22C12.48,-0.31,31.54,0.28,31.54,0.28C46.38,1.6,58,14.39,58,29.95Z"
                        transform="matrix(1 0 0 1 0 -0.000913)"
                        stroke-width="1"
                        stroke-miterlimit="1"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="contact__container--container--right">
            <div className="contact__container--container--right__form">
              <div className="contact__container--container--right__form--names">
                <div className="contact__container--container--right__form--names__item">
                  <label htmlFor="first">First Name</label>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    id="first"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="contact__container--container--right__form--names__item">
                  <label htmlFor="last">Last Name</label>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    id="last"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="contact__container--container--right__form--email">
                <label htmlFor="email">Your E-mail</label>
                <div className="contact__container--container--right__form--email__container">
                  <img src={mailImg} alt="mail-img" />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    type="email"
                    placeholder="Enter your E--mail"
                    required
                  />
                </div>
              </div>
              <div className="contact__container--container--right__form--message">
                <label htmlFor="message">Tell Me here </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Begin from here..."
                  maxLength="5000"
                  id="message"
                  cols="20"
                  rows="8"
                  required
                ></textarea>
              </div>
              <div className="contact__container--container--right__form--btn-container">
                <div onClick={onSubmit}>
                  <Btn1 href="#contactMe" text="Submit Now !" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
