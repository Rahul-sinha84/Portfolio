import React from "react";
import mailImg from "../assets/mail.svg";
import phoneImg from "../assets/phone.svg";
import devfolioImg from "../assets/devfolio.png";
import linkedinImg from "../assets/lnkdin.png";
import { Btn1 } from "../components/btn";

const Contact = () => {
  const onSubmit = (e) => {
    alert("dsafsda");
  };
  return (
    <div className="contact">
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
              Have a project in mind? Looking to partner or work together? Reach
              out through the form and I'll get back to you in the next 48
              hours.
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
                  href="https://www.linkedin.com/in/rahul-sinha-b5774119a/"
                >
                  <img src={linkedinImg} alt="linkedin-img" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://devfolio.co/@Rahul001"
                >
                  <img src={devfolioImg} alt="devfolio-img" />
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
                    id="first"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="contact__container--container--right__form--names__item">
                  <label htmlFor="last">Last Name</label>
                  <input
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
                  <Btn1 text="Submit Now !" />
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
