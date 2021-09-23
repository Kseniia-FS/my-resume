import Logo from "../../images/photo.jpg";
import Email from "../../images/email.svg";
import LinkedIn from "../../images/linkedin.svg";
import GitHub from "../../images/github.svg";
import s from "./SideBar.module.css";
export default function Sidebar() {
  return (
    <section className={s.sidebar}>
      <img src={Logo} alt="" className={s.photo} />
      <p className={s.name}>Kseniia Kovbasiuk</p>
      <p className={s.profession}>React, JavaScript Developer</p>
      <ul className={s.list}>
        <li>
          <img src={Email} alt="" />
          kseniia.fs@gmail.com
        </li>
        <li>
          <img src={LinkedIn} alt="" />
          <a
            href="https://www.linkedin.com/in/kseniia-kovbasiuk/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/kseniia-kovbasiuk
          </a>
        </li>
        <li>
          <img src={GitHub} alt="" />
          <a
            href="https://github.com/Kseniia-FS"
            target="_blank"
            rel="noreferrer"
          >
            github.com/Kseniia-FS
          </a>
        </li>
      </ul>
    </section>
  );
}
