/* eslint-disable react/prop-types */
import ContactItem from "../ContactItem";
import styles from "./Socials.module.scss";

const Socials = ({ withText, iconSize = 37 }) => {
  return (
    <ContactItem
      title={
        <div className={styles.socials__title}>
          <a className={styles.iconItem} href="13">
            <span
              style={{ fontSize: `${iconSize}px` }}
              className={"icon-soc-telegram"}
            >
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
            <span
              style={{ fontSize: `${iconSize}px` }}
              className={"icon-soc-whatsup"}
            >
              <span className="path1"></span>
              <span className="path2"></span>
            </span>
          </a>
          <a className={styles.iconItem} href="123">
            <span
              style={{ fontSize: `${iconSize}px` }}
              className={"icon-soc-viber"}
            >
              <span className="path1"></span>
              <span className="path2"></span>
              <span className="path3"></span>
              <span className="path4"></span>
              <span className="path5"></span>
            </span>
          </a>
        </div>
      }
    >
      {withText ? (
        <>
          {/* <div className={styles.socials__delimiter}></div> */}
          <p>
            <span className={"ws-nowrap-text"}>Написать вопрос</span> в чатах
            телеграм, whatsapp и viber
          </p>
        </>
      ) : null}
    </ContactItem>

    // <>
    //   <div className={styles.socials__title}>
    //     <a className={styles.iconItem} href="13">
    //       <span
    //         style={{ fontSize: `${iconSize}px` }}
    //         className={"icon-soc-telegram"}
    //       >
    //         <span className="path1"></span>
    //         <span className="path2"></span>
    //         <span className="path3"></span>
    //         <span className="path4"></span>
    //       </span>
    //     </a>

    //     <a
    //       className={styles.iconItem}
    //       href="https://api.whatsapp.com/send?phone=15551234567"
    //     >
    //       <span
    //         style={{ fontSize: `${iconSize}px` }}
    //         className={"icon-soc-whatsup"}
    //       >
    //         <span className="path1"></span>
    //         <span className="path2"></span>
    //       </span>
    //     </a>
    //     <a className={styles.iconItem} href="123">
    //       <span
    //         style={{ fontSize: `${iconSize}px` }}
    //         className={"icon-soc-viber"}
    //       >
    //         <span className="path1"></span>
    //         <span className="path2"></span>
    //         <span className="path3"></span>
    //         <span className="path4"></span>
    //         <span className="path5"></span>
    //       </span>
    //     </a>
    //   </div>
    //   {withText ? (
    //     <>
    //       <div className={styles.socials__delimiter}></div>
    //       <p>
    //         <span className={"ws-nowrap-text"}>Написать вопрос в чатах</span>{" "}
    //         <span className={"ws-nowrap-text"}>телеграм, whatsapp и viber</span>
    //       </p>
    //     </>
    //   ) : null}
    // </>
  );
};

export default Socials;
