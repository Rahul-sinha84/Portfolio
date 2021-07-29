import React, { useEffect } from "react";
import arrLeft from "../assets/arrow-left.svg";
import arrRight from "../assets/arrow-right.svg";
import Project from "../components/project";
import Bloggyz from "../assets/bloggyz.png";
import Natours from "../assets/natours.png";
import SearchIt from "../assets/searchit.png";
import Rbg from "../assets/rbg.png";
import Portfolio from "../assets/portfolio.png";
import CodingMonsters from "../assets/codingMonsters.png";
import CryptoTrust from "../assets/cryptotrust.png";

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
        count += 22;
        container.style.transform = `translateX(${count}rem)`;
      }
    });

    nextBtn.addEventListener("click", () => {
      if (count !== -180) {
        count -= 22;
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
            <Project
              link="https://github.com/Rahul-sinha84/CryptoTrust"
              name="Cryptotrust"
              desc="A well trusted dApp for ICO where each and everyone is responsible for the development of the project idea..."
              imgSrc={CryptoTrust}
            />
            <Project
              link="https://github.com/Rahul-sinha84/Coding-monsters"
              name="Coding Monsters"
              desc="An E-Learning website made fully responsive by using pure HTML and CSS, also integrated payment gateway of Razorpay."
              imgSrc={CodingMonsters}
            />
            <Project
              link="https://github.com/Rahul-sinha84/Bloggyz"
              name="Bloggyz"
              desc="Its a simple blog app. Where anyone can post a blog and could comment in any blog. The users also have thier respective profiles. The website is highly interactive."
              imgSrc={Bloggyz}
            />
            <Project
              link="https://github.com/Rahul-sinha84/Portfolio"
              name="Portfolio"
              desc="My Portfolio website made with pure HTML and CSS, built using React."
              imgSrc={Portfolio}
            />
            <Project
              link="https://github.com/Rahul-sinha84/Natours"
              name="Natours"
              desc="Its a website template for a touring site. Made with HTML and CSS using their advanced concepts.."
              imgSrc={Natours}
            />
            <Project
              link="https://github.com/Rahul-sinha84/Search-It"
              name="Search it"
              desc="An app to view the images based on the user's search input, used Unsplash's API"
              imgSrc={SearchIt}
            />
            <Project
              link="https://github.com/Rahul-sinha84/RGB-game"
              name="RGB Game"
              desc="Its a game to identify the correct combination of RGB(red, green and blue) colors by selecting the correct the color."
              imgSrc={Rbg}
            />
          </div>
          <div className="project__container--slider__btn-container">
            <div
              className="project__container--slider__btn-container--btn"
              id="prev"
            ></div>
            <div
              className="project__container--slider__btn-container--btn"
              id="next"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
