import s from "./Work.module.css";
import WorkIcon from "../../images/work.svg";
const Work = () => {
  return (
    <section className={s.work}>
      <div className={s.wrap}>
        <img src={WorkIcon} alt="" className={s.image} />
        <span>Work Experience</span>
      </div>
      <div>
        <div className={s.wrapAbout}>
          <p className={s.aboutWork}>2010-2021</p>
          <p className={s.name}>CEO</p>
          <ul>
            <li>
              Throughout the entire work, I achieved an increase in the overall
              conversion up to 63%, more stores were opened in Kiev, staff
              turnover disappeared, some of the employees achieved personal
              career heights. Also I opened a new direction of b2b sales for the
              company.
            </li>
          </ul>
        </div>
        <div className={s.wrapAbout}>
          <p className={s.aboutWork}>2008-2010</p>
          <p className={s.name}>Sales manager</p>
          <ul>
            <li>
              During the work, I achieved the conclusion of an agreement with
              large companies, was a tutor on sales trainings, and have
              maintained warm relations with key customers until now.
            </li>
          </ul>
        </div>
        <div className={s.aboutWork}></div>
      </div>
    </section>
  );
};
export default Work;
