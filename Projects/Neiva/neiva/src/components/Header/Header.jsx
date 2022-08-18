import { useState } from "react";
import styles from "./Header.module.scss";
import cn from "classnames";
import PopupMenu from "./PopupMenu";
import Menu from "../Menu/Menu";

function onMouseLeaveHandler(e, isMenuOpen, setIsMenuOpen) {
  if (isMenuOpen && window.innerWidth >= 960) setIsMenuOpen(false);
}

function onMenuClick(e, setIsMenuOpen) {
  setIsMenuOpen(true);

  if (window.innerWidth < 960) {
    document.body.style.overflow = "hidden";
  }
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header
      id={"idHeader"}
      onMouseLeave={(e) => onMouseLeaveHandler(e, isMenuOpen, setIsMenuOpen)}
      className={styles.header}
    >
      <div className="container min-container">
        <div className={styles.topContainer}>
          <div className={cn(styles.logo, styles.topContainer__item)}>
            <img src="assets/neiva_logo_top.png" />
          </div>

          <div className={cn(styles.menu, styles.topContainer__item)}>
            <input role="button" id="menu__toggle" type="checkbox" />
            <label
              onClick={(e) => onMenuClick(e, setIsMenuOpen)}
              className={cn("menu__btn", {
                open: isMenuOpen,
              })}
              htmlFor="menu__toggle"
            >
              <span></span>
            </label>
          </div>

          <div className={cn(styles.contacts, styles.topContainer__item)}>
            <div className={styles.contacts__container}>
              <p className={styles.phones}>
                <a href="tel:88005553207">8 800 555 32 07</a>
                <span className={"ws-phone-delimiter"}>|</span>
                <a href="tel:84951206534">+7 (495) 120 65 34</a>
              </p>
              <p className={`${styles.phoneText} ${styles.topPadding}`}>
                с 8:00 до 21:00 время Московское
              </p>
            </div>
          </div>
        </div>
        <div
          className={cn(styles.popupContainer, {
            [styles.open]: isMenuOpen && window.innerWidth >= 960,
          })}
        >
          <Menu type="header"></Menu>
        </div>
        <PopupMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        ></PopupMenu>
      </div>
    </header>
  );
};

export default Header;
