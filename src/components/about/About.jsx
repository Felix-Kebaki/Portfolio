import "./about.css";

import { TopOfSections } from "../topOfSections/TopOfSections";

export function About() {
  return (
    <section id="about-me" className="AboutMainSec">
      <div className="AboutMainDiv">
        <TopOfSections title="About" desc="Get to know me" number="01"/>
        <div className="AboutMainText1">
          <p>
            <span>Full-stack developer </span>crafting practical, scalable web
            solutions, focused on <span>clean code</span>, performance and
            solving real-world user problems with efficient,{" "}
            <span>user-centered design</span>.
          </p>
        </div>
      </div>
      <div className="ClosingLine"></div>
    </section>
  );
}
