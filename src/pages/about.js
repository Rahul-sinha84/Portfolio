import React from "react";

const about = () => {
  return (
    <div id="aboutMe" className="about">
      <div className="about__heading gradient-text">ABOUT ME</div>
      <div className="about__info para">
        A <b>MERN</b> stack web-developer with high expectation from{" "}
        <b>Blockchain</b> Technology. Also a <b>React-Native</b> developer.
        Invested a good amount of time in learning <b>Javascript</b>. Knows how
        to manage the states in React. And very passionate on learning and
        increasing my knowledge on different technologies.
      </div>
      <div className="about__lower">
        <div className="about__lower--left">
          <div className="about__lower--left__heading">📚 Education</div>
          <div className="about__lower--left__lower">
            <div className="about__lower--left__lower--item">
              <div className="about__lower--left__lower--item__container-1">
                <div className="about__lower--left__lower--item__container-1--title">
                  Nitte Meenakshi Institute of Technology, Bangalore
                </div>
                <div className="about__lower--left__lower--item__container-1--sub-title">
                  BTech(Computer Science and Engineering)
                </div>
              </div>
              <div className="about__lower--left__lower--item__container-2">
                <div className="about__lower--left__lower--item__container-2--duration">
                  • 2019 - 2023
                </div>
              </div>
            </div>
            <div className="about__lower--left__lower--item">
              <div className="about__lower--left__lower--item__container-1">
                <div className="about__lower--left__lower--item__container-1--title">
                  Puna International School, Gandhinagar
                </div>
                <div className="about__lower--left__lower--item__container-1--sub-title">
                  Schooling(12th standard)
                </div>
              </div>
              <div className="about__lower--left__lower--item__container-2">
                <div className="about__lower--left__lower--item__container-2--duration">
                  • 2017 - 2019
                </div>
              </div>
            </div>
            <div className="about__lower--left__lower--item">
              <div className="about__lower--left__lower--item__container-1">
                <div className="about__lower--left__lower--item__container-1--title">
                  Kendriya Vidayalaya, AFS Chakeri Kanpur
                </div>
                <div className="about__lower--left__lower--item__container-1--sub-title">
                  Schooling(10th standard)
                </div>
              </div>
              <div className="about__lower--left__lower--item__container-2">
                <div className="about__lower--left__lower--item__container-2--duration">
                  • 2014 - 2017
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about__lower--right">
          <div className="about__lower--right__heading">📌 Skills</div>
          <div className="about__lower--right__lower">
            <div className="about__lower--right__lower--item">Javascript</div>
            <div className="about__lower--right__lower--item">Typescript</div>
            <div className="about__lower--right__lower--item">MongoDB</div>
            <div className="about__lower--right__lower--item">HTML5 & CSS3</div>
            <div className="about__lower--right__lower--item">C++ & C</div>
            <div className="about__lower--right__lower--item">Git</div>
            <div className="about__lower--right__lower--item">
              Ethereum & Solidity
            </div>
            <div className="about__lower--right__lower--item">Bitcoin</div>
            <div className="about__lower--right__lower--item">ReactJS</div>
            <div className="about__lower--right__lower--item">NextJS</div>
            <div className="about__lower--right__lower--item">React-Native</div>
            <div className="about__lower--right__lower--item">GraphQL</div>
            <div className="about__lower--right__lower--item">ReduxJS</div>
            <div className="about__lower--right__lower--item">SASS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
