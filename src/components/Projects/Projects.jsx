import s from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={s.projects}>
      <ul className={s.about}>
        <li className={s.item}>
          <p>Project: Filmoteka</p>
          <span>
            <a
              href="https://vmorgunov.github.io/project-filmoteka/"
              target="_blank"
              rel="noreferrer"
              className={s.link}
            >
              watch project-filmoteka
            </a>
          </span>
          <div className={s.wrapBtn}>
            <button className={s.js}>JavaScript</button>
            <button className={s.scss}>SCSS</button>
            <button className={s.rest}>REST API</button>
            <button className={s.teamwork}>Teamwork</button>
          </div>
        </li>
        <li className={s.item}>
          <p>Project: Search Engine</p>
          <span>
            <a
              href="https://kseniia-fs.github.io/goit-react-hw-03-image-finder/"
              target="_blank"
              rel="noreferrer"
              className={s.link}
            >
              watch search engine
            </a>
          </span>
          <div className={s.wrapBtn}>
            <button className={s.js}>JavaScript</button>
            <button className={s.react}>React</button>
            <button className={s.rest}>REST API</button>
          </div>
        </li>
        <li className={s.item}>
          <p>Project: Hellen school</p>
          <span>
            <a
              href="https://vmorgunov.github.io/project-hellen/"
              target="_blank"
              rel="noreferrer"
              className={s.link}
            >
              watch project Hellen school
            </a>
          </span>
          <div className={s.wrapBtn}>
            <button className={s.js}>JavaScript</button>
            <button className={s.scss}>SCSS</button>
            <button className={s.html}>HTML</button>
            <button className={s.teamwork}>Teamwork</button>
          </div>
        </li>
        <li className={s.item}>
          <p>Project: ColorStudio</p>
          <span>
            <a
              href="https://colorstudio.com.ua/"
              target="_blank"
              rel="noreferrer"
              className={s.link}
            >
              watch web site
            </a>
          </span>
          <div className={s.wrapBtn}>
            <button className={s.php}>PHP</button>
            <button className={s.scss}>SCSS</button>
            <button className={s.html}>HTML</button>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
