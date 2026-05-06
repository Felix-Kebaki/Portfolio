import './topOfSection.css'

export function TopOfSections({title,desc,number}) {
  return (
    <section className="TopOfSectionMainSec">
      <div className="TopOfSectionMainDiv">
        <div className="SectionNumberMainDiv">
          <p>{number}</p>
        </div>
        <div className="SectionTitleMainDiv">
          <div className="TitleOnlyAtSec">
            <div></div>
            <p>{title}</p>
          </div>
          <p>{desc}</p>
        </div>
        <hr className="OpeningLine" />
      </div>
    </section>
  );
}
