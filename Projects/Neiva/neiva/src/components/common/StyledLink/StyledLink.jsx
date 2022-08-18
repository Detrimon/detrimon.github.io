/* eslint-disable react/prop-types */
import styles from "./StyledLink.module.scss";

const StyledLink = ({ children, link }) => {
  return (
    <span className={styles.container}>
      <a href={link}>{children}</a>
    </span>
  );
};

export default StyledLink;
