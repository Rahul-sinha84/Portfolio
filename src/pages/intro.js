import React from "react";
import { Btn1 } from "../components/btn";
import { Btn2 } from "../components/btn";

const intro = () => {
  return (
    <div className="intro">
      <div className="intro__left">
        <div className="intro__left--title">
          <span className="gradient-text">Lorem ipsum se </span>
          dolor sed do sit amet conse
        </div>
        <div className="intro__left--sub-title para">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
        </div>
        <div className="intro__left--btn-container">
          <Btn1 text="Contact Me" />
          <Btn2 text="Download CV" />
        </div>
      </div>
      <div className="intro__right"></div>
    </div>
  );
};

export default intro;
