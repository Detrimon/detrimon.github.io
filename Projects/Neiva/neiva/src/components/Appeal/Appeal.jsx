import cn from "classnames";
import Contacts from "../common/Contacts";
// import Socials from "../common/Socials";
import styles from "./Appeal.module.scss";

const Appeal = () => {
  return (
    <section
      className={cn(
        styles.appeal,
        "ws-section-top-indent",
        "ws-section-bottom-indent"
      )}
    >
      <div className={cn("container", "min-container")}>
        <h2 className={cn(styles.appeal__title, "ws-title-h2")}>
          Каждый человек может оказаться в сложной{" "}
          <span className="ws-nowrap-text">финансовой ситуации</span>
        </h2>
        <div className={cn("flex-grid", styles.appeal__contentBlock)}>
          <div className="col-3 col-xl-full">
            <p className={styles.appeal__textItem}>
              Чем раньше вы обратитесь, тем быстрее мы поможем вам найти
              оптимальный вариант погашения задолженности.
            </p>
          </div>

          <div className={cn("col-6 col-xl-full", styles.appeal__contactsItem)}>
            <Contacts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appeal;
