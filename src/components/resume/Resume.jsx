import { TopOfSections } from "../topOfSections/TopOfSections";
import "./resume.css";


export function Resume() {
  return (
    <section className="ResumeMainSec" id="resume">
      <div className="ResumeMainDiv">
        <TopOfSections
          title="Resume"
          desc="My areas of expertise"
          number="02"
        />

        <p className="ResumeIntroTitle">Things I Actually Know.</p>
        <div className="ResumeTextAndImgAreaDiv">
          <div className="ResumeTextAndSkillsMainDiv">
            <div className="ResumeTextMainDiv">
              <p>
                I build full-stack applications using React on the frontend and Node.js with Express or Spring Boot on the backend, focusing on clean code and scalable system design.
              </p>
              <p>
                I emphasize usability, responsive design, and efficient backend data flow, ensuring secure integrations and reliable applications.
              </p>
            </div>
            <div className="SkillsMainDiv">
                <div className="EachSkillDetailsDiv">
                    <p>Languages</p>
                    <p>Java ,JavaScript</p>
                </div>
                <div className="EachSkillDetailsDiv">
                    <p>Frontend</p>
                    <p>React.js ,Html ,CSS</p>
                </div>
                <div className="EachSkillDetailsDiv">
                    <p>Backend</p>
                    <p>SpringBoot ,Node.js ,Express.js</p>
                </div>
                <button className="ResumeBtn">
                    View Resume 
                </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ClosingLine"></div>
    </section>
  );
}
