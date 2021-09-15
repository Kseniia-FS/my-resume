import s from "./Education.module.css";
import EducationIcon from "../../images/education.svg";

const Education = () => {
  return (
    <section className={s.education}>
      <div className={s.wrap}>
        <img src={EducationIcon} alt="" className={s.image} />
        <span>Education</span>
      </div>
      <div className={s.about}>
        <p>Full Stack Developer | GoIT | 2021</p>

        <p>Psychology department | Synergy | 2019</p>
      </div>
    </section>
  );
};

export default Education;
