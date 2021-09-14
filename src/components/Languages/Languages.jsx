import s from "./Languages.module.css";
import Language from "../../images/language.svg";
const Languages = () => {
  return (
    <section className={s.languages}>
      <div className={s.wrap}>
        <img src={Language} alt="" className={s.image} />
        <span>Languages</span>
      </div>
      <div className={s.about}>
        <p>English: Upper-Intermediate</p>

        <p>Russian/Ukrainian: Native</p>
      </div>
    </section>
  );
};

export default Languages;
