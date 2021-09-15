import s from "./Work.module.css";
import WorkIcon from "../../images/work.svg";
import Bergge from "../../images/logo1.png";
import Farbaland from "../../images/logo.png";
import Vivat from "../../images/logo-vivat.png";
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
              During the whole work there were many achievements that I am proud
              of. I have implemented three large projects from scratch, managed
              the team at all stages of implementation. The main challenge I
              successfully completed was to create working brands that the
              consumer can trust. Starting from logo design, brand book
              creation, to website development and conversion landing pages. And
              most important, the creation of a sales department for each
              project. I am proud to invite you to familiarize yourself with the
              projects.
            </li>
          </ul>
        </div>
        <div className={s.wrapAbout}>
          <p className={s.aboutWork}>projects:</p>

          <ul className={s.brands}>
            <li className={s.bergge}>
              <a href="https://bergge.com/" target="_blank" rel="noreferrer">
                <img src={Bergge} alt="" />
              </a>
            </li>
            <li className={s.bergge}>
              <a href="https://farbaland.com/" target="_blank" rel="noreferrer">
                <img src={Farbaland} alt="" />
              </a>
            </li>
            <li className={`${s.bergge} ${s.vivat}`}>
              <a
                href="https://vivatdecor.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Vivat} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className={s.aboutWork}></div>
      </div>
    </section>
  );
};
export default Work;
