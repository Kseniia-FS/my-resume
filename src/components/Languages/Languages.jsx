import s from "./Languages.module.css";

const Languages = () => {
  return (
    <section className={s.languages}>
      <div className={s.about}>
        <p>English: Upper-Intermediate</p>

        <p>Russian/Ukrainian: Native</p>
      </div>
    </section>
  );
};

export default Languages;
