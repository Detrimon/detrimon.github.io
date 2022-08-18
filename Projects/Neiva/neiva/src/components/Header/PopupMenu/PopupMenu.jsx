/* eslint-disable react/prop-types */
import cn from "classnames";
import Menu from "../../Menu/Menu";
import styles from "./PopupMenu.module.scss";

const PopupMenu = ({ isMenuOpen = false, setIsMenuOpen }) => {
  return (
    <div
      className={cn(styles.container, {
        [styles.open]: window.innerWidth < 960 && isMenuOpen,
      })}
    >
      <div className={cn(styles.innerContainer, "container", "min-container")}>
        <div className={styles.contentContainer}>
          <div className={styles.topPanel}>
            <img
              src="assets/neiva_logo.png"
              alt="Нэйва"
              className={styles.topPanel__logo}
            />
            <div>
              <span
                className={cn("icon-close", styles.topPanel__close)}
                onClick={() => {
                  setIsMenuOpen(false);
                  document.body.style.overflow = "auto";
                }}
              ></span>
            </div>
          </div>
          <Menu type="popup"></Menu>
          {/* <nav className={styles.menu}>
            <ul>
              <li>
                <a href="#About">О нас</a>
              </li>
              <li>
                <a href="#Debtors">Должникам</a>
              </li>
              <li>
                <a href="#Pay">Оплатить долг</a>
              </li>
              <li>
                <a href="#OrderDocument">Заказать справку</a>
              </li>
              <li>
                <a href="#FAQ">Вопросы и ответы</a>
              </li>

              <li>
                <a href="#About">Карьера</a>
              </li>
              <li>
                <a href="#Contacts">Контакты</a>
              </li>
            </ul>
          </nav> */}
          <div className={styles.bottomBlock}>
            <p className={styles.contact_us}>
              Если у вас есть вопросы, свяжитесь с нами
            </p>
            <div className={styles.contacts}>
              <div className={styles.contacts__callContainer}>
                <div className={styles.callContainer__phone}>
                  <a className={styles.iconItem} href="123">
                    <span className={"icon-viber"}>
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </span>
                  </a>
                  <span className="ws-nowrap-text">
                    <a href="tel:88005553207">8 800 555 32 07</a>
                  </span>{" "}
                </div>
                <div className={styles.callContainer__text}>
                  <span className="ws-nowrap-text">Позвонить с</span>{" "}
                  <span className="ws-nowrap-text">8:00 до 21:00</span>{" "}
                  <span className="ws-nowrap-text">время Московское</span>
                </div>
              </div>
              <div className={styles.contacts__socialContainer}>
                <div className={styles.socialContainer__icons}>
                  <a className={styles.iconItem} href="13">
                    <span className={"icon-soc-telegram"}>
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                      <span className="path4"></span>
                    </span>
                  </a>

                  <a
                    className={styles.iconItem}
                    href="https://api.whatsapp.com/send?phone=15551234567"
                  >
                    <span className={"icon-soc-whatsup"}>
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </span>
                  </a>
                  <a className={styles.iconItem} href="123">
                    <span className={"icon-soc-viber"}>
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                      <span className="path4"></span>
                      <span className="path5"></span>
                    </span>
                  </a>
                </div>
                <div className={styles.socialContainer__text}>
                  <span className="ws-nowrap-text">
                    Написать вопрос в чатах
                  </span>{" "}
                  <span className="ws-nowrap-text">
                    телеграм, whatsapp и viber
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.underscore}>
              <p className={styles.underscore__copyrights}>
                <span className="ws-nowrap-text">© ООО “Нэйва”</span>
              </p>
              <a href="#ToPolyciFile" className={styles.underscore__policy}>
                Политика конфиденциальности
              </a>
            </div>
            <div className={styles.whitespace}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupMenu;
