import React from "react";

const section = () => {
  return (
    <div id="myInfo" className="section">
      <div className="section__container">
        <div className="section__container--experience">
          <div className="section__container--experience__title">
            💼 Experience
          </div>
          <div className="section__container--experience__container">
            <div className="section__container--experience__container--item">
              <div className="section__container--experience__container--item__left">
                <div className="section__container--experience__container--item__left--title">
                  <a
                    href="https://bringin.xyz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Bringin
                  </a>
                </div>
                <div className="section__container--experience__container--item__left--sub-title">
                  Bitcoin offramp and onramp solution.
                </div>
                <div className="section__container--experience__container--item__left--position">
                  Software Engineer
                  <ul>
                    <li>Made NextJS application for selling Bitcoin.</li>
                    <li>
                      Integrations with the Backend (<b>NodeJS</b> server).
                    </li>
                    <li>Developed and Managed UI components. </li>
                    <li>Worked on proxy servers on NextJS.</li>
                  </ul>
                </div>
              </div>
              <div className="section__container--experience__container--item__right">
                <div className="section__container--experience__container--item__right--duration">
                  • 8/2022 - Present
                </div>
              </div>
            </div>
            <div className="section__container--experience__container--item">
              <div className="section__container--experience__container--item__left">
                <div className="section__container--experience__container--item__left--title">
                  <a
                    href="https://www.fettle.plus/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fettle
                  </a>
                </div>
                <div className="section__container--experience__container--item__left--sub-title">
                  A fitness social application.
                </div>
                <div className="section__container--experience__container--item__left--position">
                  MERN Developer
                  <ul>
                    <li>
                      Worked on <b>React-Native</b> and its libraries
                    </li>
                    <li>
                      Integrations with the Backend (<b>NodeJS</b> server).
                    </li>
                    <li>Developed and Managed UI components. </li>
                    <li>
                      Made a website in <b>React</b> for showcasing the
                      application.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="section__container--experience__container--item__right">
                <div className="section__container--experience__container--item__right--duration">
                  • 9/2021 - 1/2022
                </div>
              </div>
            </div>
            <div className="section__container--experience__container--item">
              <div className="section__container--experience__container--item__left">
                <div className="section__container--experience__container--item__left--title">
                  <a
                    href="https://www.linkedin.com/in/coding-monsters/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Coding Monsters
                  </a>
                </div>
                <div className="section__container--experience__container--item__left--sub-title">
                  An online teaching platform.
                </div>
                <div className="section__container--experience__container--item__left--position">
                  MERN Developer
                  <ul>
                    <li>
                      Worked on <b>NodeJS</b>, <b>React & Redux</b>, <b>SASS</b>
                      .
                    </li>
                    <li>
                      Made full website using <b>HTML5 & CSS3</b>.
                    </li>
                    <li>
                      Added <b>Payment gateway</b> (Razorpay).
                    </li>
                    <li>Google sheet setup to store all the data.</li>
                  </ul>
                </div>
              </div>
              <div className="section__container--experience__container--item__right">
                <div className="section__container--experience__container--item__right--duration">
                  • 4/2021 - 7/2021
                </div>
              </div>
            </div>
            <div className="section__container--experience__container--item">
              <div className="section__container--experience__container--item__left">
                <div className="section__container--experience__container--item__left--title">
                  <a
                    href="https://lofaz.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lofaz
                  </a>
                </div>
                <div className="section__container--experience__container--item__left--sub-title">
                  A platform for shopkeepers to let their products online
                </div>
                <div className="section__container--experience__container--item__left--position">
                  MERN Developer (Mainly Backend)
                  <ul>
                    <li>
                      Worked on <b>NodeJS</b>, <b>ExpressJS</b> and{" "}
                      <b>MongoDB</b>.
                    </li>
                    <li>
                      Made APIs, Schemas, and handle authenticity of articles.
                    </li>
                    <li>
                      Worked on <b>AWS</b>.
                    </li>
                    <li>
                      Created <b>CI/CD pipeline</b> on Heroku.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="section__container--experience__container--item__right">
                <div className="section__container--experience__container--item__right--duration">
                  • 5/2021 - 7/2021
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section__container--achievement">
          <div className="section__container--achievement__title">
            🏆 Achievements
          </div>
          <div className="section__container--achievement__container">
            <div className="section__container--achievement__container--item">
              <div className="section__container--achievement__container--item__title">
                Winners at Hackbout 2.0
              </div>
              <div className="section__container--achievement__container--item__sub-title">
                Secured 3rd postion with our project 'CryptoTrust'.
              </div>
              <div className="section__container--achievement__container--item__position">
                Solves the trust between company and investors in ICO.
                <ul>
                  <li>Based on Ethereum.</li>
                  <li>Smart Contracts in Solidity</li>
                  <li>Test cases in Chai.</li>
                  <li>Used Truffle-suite.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section;
