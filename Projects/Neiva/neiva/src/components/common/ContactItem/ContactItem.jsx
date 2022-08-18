/* eslint-disable react/prop-types */
import styles from "./ContactItem.module.scss";

const ContactItem = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleBlock}>{title}</div>
      {children ? <p className={styles.contentBlock}>{children}</p> : null}
    </div>
  );
};

export default ContactItem;
