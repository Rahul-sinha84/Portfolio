import React from "react";
import arrow from "../assets/arrow.svg";

export const Btn1 = ({ text }) => {
  return (
    <div className="btn1">
      <div className="btn1__org">
        <div className="btn1__org--text">{text}</div>
      </div>
      <div className="btn1__back">
        <div className="btn1__back--text">{text}</div>
      </div>
    </div>
  );
};

export const Btn2 = ({ text }) => {
  return (
    <div className="btn2">
      <div className="btn2__text">{text}</div>
      <div className="btn2__arrow">
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
};
