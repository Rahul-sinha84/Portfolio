import React, { useEffect } from "react";
import arrLeft from "../assets/arrow-left.svg";
import arrRight from "../assets/arrow-right.svg";
import Project from "../components/project";

const Projects = () => {
  var prevBtn;
  var nextBtn;

  var container;

  var count = 0;
  useEffect(() => {
    prevBtn = document.querySelector("#prev");
    nextBtn = document.querySelector("#next");
    container = document.querySelector("#container");
    prevBtn.addEventListener("click", () => {
      if (count !== 0) {
        count += 30;
        container.style.transform = `translateX(${count}rem)`;
      }
    });

    nextBtn.addEventListener("click", () => {
      if (count !== -180) {
        count -= 30;
        container.style.transform = `translateX(${count}rem)`;
        console.log(count);
      }
    });
  }, []);
  return (
    <div id="myProjects" className="project">
      <div className="project__container">
        <div className="project__container--heading gradient-text">
          PROJECTS
        </div>
        <div className="project__container--typo">
          <div className="project__container--typo__title">
            Lorem ipsum dolor sit amet
          </div>
          <div className="project__container--typo__sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            consectetur adipiscing elit duis tristique.
          </div>
        </div>
        <div className="project__container--slider">
          <div
            id="container"
            className="project__container--slider__components"
          >
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
          <div className="project__container--slider__btn-container">
            <div
              className="project__container--slider__btn-container--btn"
              id="prev"
            >
              <img src={arrLeft} alt="arrow_left" />
            </div>
            <div
              className="project__container--slider__btn-container--btn"
              id="next"
            >
              <img src={arrRight} alt="arrow_right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
