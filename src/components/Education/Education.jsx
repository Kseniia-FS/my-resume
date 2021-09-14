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
        <span>2021</span>
        <p>Full Stack Developer | GoIT</p>
        <span>2019</span>
        <p>Psychology department | Synergy</p>
      </div>
    </section>
  );
};

export default Education;
