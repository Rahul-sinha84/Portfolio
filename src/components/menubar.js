import React from "react";

const navbar = () => {
  return (
    <div className="menubar">
      <div className="menubar__left">
        <a href="" className="menubar--link">
          PORTFOLIO
        </a>
      </div>
      <div className="menubar__right">
        <a href="#aboutMe" className="menubar--link">
          About
        </a>
        <a href="#myProjects" className="menubar--link">
          Project
        </a>
        <a href="#myInfo" className="menubar--link">
          Experience
        </a>
        <a href="#myInfo" className="menubar--link">
          Achievements
        </a>
        <a href="#contactMe" className="menubar--link">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default navbar;
