import React, { useEffect } from "react";
import arrLeft from "../assets/arrow-left.svg";
import arrRight from "../assets/arrow-right.svg";
import Project from "../components/project";
import Bloggyz from "../assets/bloggyz.jpg";
import Natours from "../assets/natours.jpg";
import SearchIt from "../assets/searchit.jpg";
import Rbg from "../assets/rbg.jpg";
import Portfolio from "../assets/portfolio.jpg";
import CodingMonsters from "../assets/codingMonsters.jpg";
import CryptoTrust from "../assets/cryptotrust.jpg";
import MoneyManage from "../assets/moneyManagement.jpeg";
import DinstApp from "../assets/dinstaApp.jpg";
import ICO from "../assets/icoScratch.jpg";

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
      if (count >= -225) {
        count -= 22;
        container.style.transform = `translateX(${count}rem)`;
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
            It's an art to share your idea through code...
          </div>
          <div className="project__container--typo__sub-title">
            A Project is complete when it starts working for you. Rather than
            you working for it.
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
              link="https://gitlab.com/Rahul-sinha84/ico-scratch"
              name="ICO"
              desc="An ICO made from scratch in ethereum, with ERC20 standard"
              imgSrc={ICO}
            />
            <Project
              link="https://gitlab.com/Rahul-sinha84/instagram-decentralised"
              name="Instagram-Decentralised"
              desc="A Dapp to upload the image and tip the owner of the image"
              imgSrc={DinstApp}
            />
            <Project
              link="https://github.com/Rahul-sinha84/Money-Tracker-App"
              name="Money-Tracker-App"
              desc="A React-Native app to manage your money, made specifically for my purpose"
              imgSrc={MoneyManage}
            />
            <Project
              link="https://codingmonsters.com"
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
