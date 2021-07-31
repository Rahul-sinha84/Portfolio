import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const input = document.querySelector("#toggle");
    const label = document.querySelector(".menubar__left--toggle");
    const menubar = document.querySelector(".menubar__right");
    label.addEventListener("click", () => {
      if (input.checked) {
        menubar.classList.add("translate-up");
        menubar.classList.remove("translate-down");
      } else {
        menubar.classList.add("translate-down");
        menubar.classList.remove("translate-up");
      }
    });
  }, []);

  return (
    <div id="top" className="menubar">
      <div className="menubar__left">
        <a href="" className="menubar--link">
          PORTFOLIO
        </a>
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle" className="menubar__left--toggle">
          <div id="#one" className="menubar__left--toggle__bar one">
            {" "}
          </div>
          <div id="#two" className="menubar__left--toggle__bar two">
            {" "}
          </div>
          <div id="#three" className="menubar__left--toggle__bar three">
            {" "}
          </div>
        </label>
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
      <a href="#top" className="toTop">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-arrow-up"
        >
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </a>
    </div>
  );
};

export default Navbar;
