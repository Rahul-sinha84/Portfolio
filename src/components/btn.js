import React from "react";
import arrow from "../assets/arrow.svg";

export const Btn1 = ({ text, href = "#" }) => {
  return (
    <a href={href} className="btn1">
      <div className="btn1__org">
        <div className="btn1__org--text">{text}</div>
      </div>
      <div className="btn1__back">
        <div className="btn1__back--text">{text}</div>
      </div>
    </a>
  );
};

export const Btn2 = ({ text, href = "#" }) => {
  return (
    <div className="btn2">
      <a target="_blank" rel="noreferrer" href={href} className="btn2__text">
        {text}
      </a>
      <div className="btn2__arrow">
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
};
