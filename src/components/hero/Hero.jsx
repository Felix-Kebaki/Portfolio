import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

import "./hero.css";

export function Hero() {
  return (
    <section id="home" className="HeroMainSec">
      <div className="SocialsIconsHero">
        <p>
          <a
            href="https://github.com/Felix-Kebaki"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faSquareGithub} />
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/felix-kebaki-"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faSquareLinkedin} />
          </a>
        </p>
      </div>

      <div className="HowMuchLoveDiv">
        <p>
          I love designing websites; the
          <br />
          challenges fuel my creativity and
          <br />
          problem-solving skills.
        </p>
      </div>
      <div className="TheyWillLove">
        <p>
          Am a freelancer who create beautiful <br />
          websites your users will love them.
        </p>
      </div>
      <div className="HobbiesTop">
        <p>
          I love football, music, coding, taking walks
          <br />
          and watching movies; they enrich my life with
          <br />
          diverse experiences.
        </p>
      </div>

      <div className="HeroSecContent">
        <div className="IntroNameDiv">
          <p id="MyNameTop">
            <span id="referenceToAm">F</span>elix Kebaki,
            <span id="bothTop">both a</span>
          </p>
          <p id="WhatDoTop">
            <span id="WhatDoTopColor">Software</span> and
            <span id="WhatDoTopColor">{" "}Network</span>
          </p>
          <p id="PlaceTop">Engineer.</p>
        </div>
      </div>
    </section>
  );
}
