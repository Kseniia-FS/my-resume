import s from "./Work.module.css";

import Bergge from "../../images/logo1.png";
import Farbaland from "../../images/logo.png";
import Vivat from "../../images/logo-vivat-1-2.png";
const Work = () => {
  return (
    <section className={s.work}>
      <div className={s.wrapAbout}>
        <p className={s.aboutWork}>2021</p>
        <p className={s.name}>STUDENT | GoIT</p>
        <ul>
          <li className={s.item}>
            During my studing in GoIT school I have written more than 5 little
            project by myself using different tools, libs and consolidated the
            knowledge gained during the course (all of them you can find on my
            GitHub profile). But the most important is that I got a huge
            experince in team projects where we used Scrum. In all of them I had
            a role of assistant of team lead.
          </li>
        </ul>
      </div>
      <div>
        <div className={s.wrapAbout}>
          <p className={s.aboutWork}>2010-2021</p>
          <p className={s.name}>CEO | CKBO Ltd.</p>
          <ul>
            <li className={s.item}>
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
