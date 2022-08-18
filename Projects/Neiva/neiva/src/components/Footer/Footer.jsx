import StyledLink from "../common/StyledLink/StyledLink";
import Socials from "../common/Socials";
import PhoneItem from "../common/PhoneItem";
import Menu from "../Menu";
import styles from "./Footer.module.scss";
import cn from "classnames";

const Footer = () => {
  return (
    <section id="Contacts" className={styles.footer}>
      <div className="container min-container">
        <div className={cn("flex-grid", styles.footer__titleContainer)}>
          <div className={"col-2 col-lg-1 col-md-half col-sm-full"}>
            <img src="assets/neiva_logo.png" className={styles.footer__logo} />
          </div>
          <div className="col-7 col-lg-4 col-md-full">
            <Menu type="footer"></Menu>
          </div>
        </div>

        <div className="flex-grid">
          <div
            className={cn("col-2 col-lg-1 col-md-full", styles.footer__address)}
          >
            <p>
              <span className="ws-nowrap-text">117218, г. Москва,</span>{" "}
              <span className="ws-nowrap-text">ул. Кржижановского,</span>{" "}
              <span className="ws-nowrap-text">д. 15, корп. 5, оф. 402</span>
            </p>
            <p>
              <span className="ws-nowrap-text">
                <a href="tel:874951206534">+7 (495) 120 65 34</a>
              </span>{" "}
              <span className="ws-nowrap-text">
                <a href="mailto:info@neiva.group">info@neiva.group</a>
              </span>{" "}
            </p>
          </div>
          <div className="col-1 col-xl-hide"></div>
          <div className="col-2 col-lg-1 col-md-half">
            <PhoneItem withIcon></PhoneItem>
          </div>
          <div className="col-2 col-lg-1 col-md-half">
            <Socials withText></Socials>
          </div>
          <div className="col-2 col-xl-1 col-lg-hide">
            <StyledLink link="#ContactUs">Написать обращение</StyledLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
