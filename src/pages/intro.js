import React from "react";
import { Btn1 } from "../components/btn";
import { Btn2 } from "../components/btn";
import resumePath from "../assets/resume.pdf";
import photo from "../assets/photo.svg";

const intro = () => {
  return (
    <div className="intro">
      <div className="intro__left">
        <div className="intro__left--title">
          The nature of Portfolio is always a{" "}
          <span className="gradient-text">work in progress</span>
        </div>
        <div className="intro__left--sub-title para">
          MERN Stack || React-native || Ethereum
        </div>
        <div className="intro__left--btn-container">
          <Btn1 href="#contactMe" text="Contact Me" />
          <Btn2 href={resumePath} text="Download CV" />
        </div>
      </div>
      <div className="intro__right">
        <img src={photo} alt="profile" />
      </div>
    </div>
  );
};

export default intro;
