import s from "./Summary.module.css";

import TechSkills from "../TechSkills/TechSkills";
import SoftSkills from "../SoftSkills/SoftSkills";

const Summary = () => {
  return (
    <section className={s.summary}>
      <div className={s.about}>
        <p>
          First of all I should say that I passionate about my work, although I
          have little experience for now. Software engineering is a never-ending
          puzzle that I am passionately engaged in coding. My personal and
          professional experience have taught me the following about myself:
        </p>
        <ul>
          <li className={s.item}>I care for business</li>
          <li className={s.item}>
            I educate, refine and drive myself to be a better person and
            specialist
          </li>
          <li className={s.item}>Focused on making high-quality job</li>
          <li className={s.item}>Strong team player</li>
          <li className={s.item}>
            I am constantly learning because I never settle
          </li>
        </ul>
        <div className={s.skillsWrap}>
          <TechSkills />
          <SoftSkills />
        </div>
      </div>
    </section>
  );
};

export default Summary;
