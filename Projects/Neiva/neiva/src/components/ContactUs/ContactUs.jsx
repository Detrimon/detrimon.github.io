import cn from "classnames";
import Contacts from "../common/Contacts";
import styles from "./ContactUs.module.scss";

const ContactUs = () => {
  return (
    <section
      className={cn(
        styles.contactUs,
        "ws-section-top-indent",
        "ws-section-bottom-indent"
      )}
    >
      <div className="container min-container">
        <div className={cn("flex-grid", styles.contactUs__headerBlock)}>
          <div className="col-full col-lg-half col-md-full">
            <h2 className={cn("ws-title-h2", styles.contactUs__headerTitle)}>
              Не знаете, чем выплачивать долг?{" "}
            </h2>
          </div>
          <div className="col-full col-lg-half col-md-full">
            <h3 className={cn("ws-title-h3", styles.contactUs__headerText)}>
              Свяжитесь с нами, мы предложим персональную программу и услуги
              финансового консультанта.
            </h3>
          </div>
        </div>
        <div className={cn("flex-grid", styles.contactUs__contentBlock)}>
          <div className={cn("col-6 col-lg-full", styles.contactUs__contacts)}>
            <Contacts withPhoneIcon></Contacts>
          </div>
          <div className={cn("col-3 col-lg-full", styles.contactUs__image)}>
            <img src="assets/contactUs.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
