import "./project.css";

import { ProjectList } from "../../projects";
import { TopOfSections } from "../topOfSections/TopOfSections";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

export function Projects() {
  return (
    <section className="ProjectMainSec" id="projects">
      <div className="ProjectMainDiv">
        <TopOfSections
          title="Projects"
          desc="Check out what I have managed to build"
          number="03"
        />
        <div className="AllProjectMainWrapper">
          {ProjectList.map((project) => (
            <a
              className="EachProjectMainDiv"
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.img}
                alt=""
                className="ProjectImageAtBigScreens"
              />
              <div className="EachProjectDetailsMainDiv">
                <div className="TitleAndDateProjectMainDiv">
                  <div className="TitleAndDateProjectDiv">
                    <div className="ProjectsDate">
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="ProjectDateCalendarIcon"
                      />{" "}
                      <span>{project.dates}</span>
                    </div>
                    <p>{project.title}</p>
                  </div>
                </div>
                <div className="ProjectImageAtSmallScreens">
                  <img src={project.img} alt="" />
                  <div>
                    <div className="FirstDivOnProjectImg"></div>
                    <div className="SecondDivOnProjectImg"></div>
                  </div>
                </div>
                <div className="DescProjectMainDiv">
                  <p>{project.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="ClosingLine"></div>
    </section>
  );
}
