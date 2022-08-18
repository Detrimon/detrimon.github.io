/* eslint-disable react/prop-types */
import { useMemo } from "react";
import styles from "./Menu.module.scss";
import cn from "classnames";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const aMenuItems = [
  { title: "О нас", href: "/About#About" },
  { title: "Должникам", href: "/MainPage#Debtors" },
  { title: "Оплатить долг", href: "/MainPage#Pay" },
  { title: "Заказать справку", href: "/MainPage#OrderDocument" },
  { title: "Вопросы и ответы", href: "/MainPage#FAQ" },
  { title: "Карьера", href: "/About#Career" },
  { title: "Контакты", href: "/MainPage#Contacts" },
];

// type:: "header" || "footer" || "popup"
const Menu = ({ type = "header" }) => {
  const menuList = useMemo(
    function () {
      return aMenuItems.map(function (item, index) {
        return (
          <li key={index}>
            <HashLink smooth to={item.href}>
              {item.title}
            </HashLink>
            {/* <a href={item.href}>{item.title}</a> */}
          </li>
        );
      });
    },
    [aMenuItems]
  );

  console.log(type);
  return (
    <nav
      className={cn({
        [styles.headerMenu]: type === "header",
        [styles.footerMenu]: type === "footer",
        [styles.popupMenu]: type === "popup",
      })}
    >
      <ul>{menuList}</ul>
    </nav>
  );
};

export default Menu;
