import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import Book from "../../images/book.svg";
import EducationIcon from "../../images/education.svg";
import Project from "../../images/project.svg";
import WorkIcon from "../../images/work.svg";
import Language from "../../images/language.svg";
function Navigation() {
  return (
    <nav>
      <NavLink to="/" className={`${s.wrap} ${s.hello}`}>
        <span>HELLO</span>
      </NavLink>
      <NavLink to="/overview" className={s.wrap} activeClassName={s.active}>
        <img src={Book} alt="" className={s.image} />
        <span>Overview</span>
      </NavLink>
      <NavLink to="/projects" className={s.wrap} activeClassName={s.active}>
        <img src={Project} alt="" className={s.image} />
        <span>Projects</span>
      </NavLink>
      <NavLink to="/work" className={s.wrap} activeClassName={s.active}>
        <img src={WorkIcon} alt="" className={s.image} />
        <span>Work experience</span>
      </NavLink>
      <NavLink to="/education" className={s.wrap} activeClassName={s.active}>
        <img src={EducationIcon} alt="" className={s.image} />
        <span>Projects</span>
      </NavLink>
      <NavLink to="/languages" className={s.wrap} activeClassName={s.active}>
        <img src={Language} alt="" className={s.image} />
        <span>Languages</span>
      </NavLink>
    </nav>
  );
}

export default Navigation;
