import cn from "classnames";
import Socials from "../common/Socials";
import StyledLink from "../common/StyledLink";
import styles from "./Welcome.module.scss";

const About = () => {
  return (
    <section
      className={cn(
        styles.about,
        "ws-section-top-indent",
        "ws-section-bottom-indent"
      )}
    >
      {/* Блок с заголовком */}
      <div className={cn(styles.about__title, "container", "min-container")}>
        <h1 className="ws-title-h1">
          Поможем найти оптимальный способ урегулировать просроченную
          задолженность
        </h1>
      </div>
      {/* Блок с основной (во всю ширину экрана) картинкой */}
      <div className={styles.about__mainImage}>
        <img src="assets/About_image.png" alt="" />
      </div>
      {/* Блок с основным содержимым раздела About */}
      <div
        className={cn(
          styles.about__mainContainer,
          "container",
          "min-container",
          "ws-section-top-indent"
        )}
      >
        <h2 className={cn("ws-title-h2", styles.mainContainer__title)}>
          Мы поможем вам урегулировать проблемную задолженность и восстановить
          кредитную историю
        </h2>

        <div
          className={cn("flex-grid", styles.mainContainer__descriptionBlock)}
        >
          <div className={"col-2 col-lg-hide"}></div>
          <div
            className={cn(
              "col-3",
              "col-lg-half",
              "col-sm-full",
              styles.descriptionBlock__text
            )}
          >
            <p>
              Ваш долг оказался у нас, потому что Банки и МФО передают нам
              просроченную задолженность, после чего мы осуществляем возврат
              денег в рамках досудебной и судебной практик.
            </p>
          </div>
          <div
            className={cn(
              "col-3",
              "col-lg-half",
              "col-sm-full",
              styles.descriptionBlock__text
            )}
          >
            <p>
              Как только долг передан нашей компании, вы начинаете
              взаимодействовать с нами, а не с первоначальным кредитором.
            </p>
            <span>
              <StyledLink>Оплатить задолженность</StyledLink>
            </span>

            {/* <span>
              <a href="#lkj"></a>
            </span> */}
          </div>
          <div className={"col-1 col-lg-hide"}></div>
        </div>

        <div className={cn(styles.mainContainer__contentBlock, "flex-grid")}>
          <div
            className={cn(
              styles.contentBlock__textContainer,
              "col-4 col-lg-half col-md-full"
            )}
          >
            <div className={styles.contentBlock__slogans}>
              <div className={styles.contentBlock__sloganItem}>
                <span>01</span>
                <p>Рассмотрим каждую ситуацию индивидуально</p>
              </div>
              <div className={styles.contentBlock__sloganItem}>
                <span>02</span>
                <p>Дадим профессиональную консультацию</p>
              </div>
              <div className={styles.contentBlock__sloganItem}>
                <span>03</span>
                <p>Поможем восстановить кредитную историю</p>
              </div>
            </div>
            <div className={styles.contentBlock__socials}>
              <Socials></Socials>
            </div>
            <span>
              <p className={styles.contentBlock__actionText}>
                Напишите нам в чат в телеграм, whatsapp и viber.
              </p>
              <p className={styles.contentBlock__actionText}>
                Мы оперативно ответим на ваши вопросы.
              </p>
            </span>
          </div>
          <div
            className={cn(
              styles.contentBlock__imageContainer,
              "col-5 col-lg-half col-md-full"
            )}
          >
            <img src="assets/About_contentImage.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
