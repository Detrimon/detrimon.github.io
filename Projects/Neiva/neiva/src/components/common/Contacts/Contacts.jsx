/* eslint-disable react/prop-types */
import styles from "./Contacts.module.scss";
import Socials from "../Socials";
import PhoneItem from "../PhoneItem";

const Contacts = ({ withPhoneIcon }) => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__item}>
        <PhoneItem withIcon={withPhoneIcon} />
      </div>
      <div className={styles.contacts__item}>
        <Socials withText></Socials>
      </div>
    </div>
  );
};

export default Contacts;
