import Logo from "../../images/photo.jpg";
import Pickachu from "../../images/Pikachu.png"
import Email from "../../images/email.svg";
import LinkedIn from "../../images/linkedin.svg";
import GitHub from "../../images/github.svg";
import s from "./SideBar.module.css";
export default function Sidebar() {
  return (
    <section className={s.sidebar}>
      <img src={Pickachu} alt="" className={s.photo} />
      <p className={s.name}>Kseniia Kovbasiuk</p>
      <p className={s.profession}>Full Stack Developer</p>
      <ul className={s.list}>
        <li>
          <img src={Email} alt="" />
          kseniia.fs@gmail.com
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kseniia-kovbasiuk/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="" width="30" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Kseniia-FS"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GitHub} alt="" width="30" />
          </a>
        </li>
      </ul>
    </section>
  );
}
