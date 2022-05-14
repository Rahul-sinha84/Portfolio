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
                  Fettle
                </div>
                <div className="section__container--experience__container--item__left--sub-title">
                  A fitness social application.
                </div>
                <div className="section__container--experience__container--item__left--position">
                  MERN Developer
                  <ul>
                    <li>
                      Got a complete understanding of an Mobile Application.
                    </li>
                    <li>Integrations with the Backend.</li>
                    <li>Managed Cache data in Mobile App. </li>
                    <li>Wrote Modular code.</li>
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
                  Coding Monsters
                </div>
                <div className="section__container--experience__container--item__left--sub-title">
                  An online teaching platform.
                </div>
                <div className="section__container--experience__container--item__left--position">
                  MERN Developer
                  <ul>
                    <li>Made full website using only HTML5 and CSS3.</li>
                    <li>Added Payment gateway(Razorpay).</li>
                    <li>Google sheet setup to store all the data.</li>
                    <li>Fuzzy Search-Bar to search for the courses.</li>
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
                  Lofaz
                </div>
                <div className="section__container--experience__container--item__left--sub-title">
                  A Platform which let shopkeepers to sell their products
                  online.
                </div>
                <div className="section__container--experience__container--item__left--position">
                  MERN Developer (Mainly Backend)
                  <ul>
                    <li>Creating REST apis.</li>
                    <li>Creating Schemas.</li>
                    <li>Firebase Push Notification.</li>
                    <li>CI/CD pipeline in Gitlab(Heroku).</li>
                    <li>2factor message functionality.</li>
                    <li>
                      node-cron to dump the mongoDB data to S3 bucket(AWS) at a
                      regular interval.
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
