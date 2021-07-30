import React from "react";

const about = () => {
  return (
    <div id="aboutMe" className="about">
      <div className="about__heading gradient-text">ABOUT ME</div>
      <div className="about__info para">
        <b>MERN</b> stack Web developer. Knows how the backend and front end
        works. Also knows <b>Advanced concept of CSS3 and HTML5</b>. Also have a
        good knowledge on <b>Javascript (ES6)</b>. Knows <b>React and Redux</b>{" "}
        for a better development environment. And also knows about{" "}
        <b>Firebase</b> system. Also knows the concept of <b>mongoDB</b> and
        knows how to make it <b>realtime using pusher</b>. Further I also know{" "}
        <b>GraphQL</b> which makes the life of the developer much more easier. I
        also know a decent amount of <b>React-Native</b>. With all these I am
        also a strong believer of <b>Decetralization</b> or a{" "}
        <b>Blockchain enthusiast</b>.
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
                  • 2019 - Present
                </div>
              </div>
            </div>
            <div className="about__lower--left__lower--item">
              <div className="about__lower--left__lower--item__container-1">
                <div className="about__lower--left__lower--item__container-1--title">
                  Puna International School, Gandhinagar
                </div>
                <div className="about__lower--left__lower--item__container-1--sub-title">
                  Schooling(12th standard - 78%)
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
                  Schooling(10th standard - 10CGPA)
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
            <div className="about__lower--right__lower--item">MongoDB</div>
            <div className="about__lower--right__lower--item">HTML5 & CSS3</div>
            <div className="about__lower--right__lower--item">C++ & C</div>
            <div className="about__lower--right__lower--item">Git</div>
            <div className="about__lower--right__lower--item">
              Ethereum & Solidity
            </div>
            <div className="about__lower--right__lower--item">ReactJS</div>
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
