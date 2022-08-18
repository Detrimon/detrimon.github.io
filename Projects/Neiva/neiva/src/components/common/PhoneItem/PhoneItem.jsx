/* eslint-disable react/prop-types */
import styles from "./PhoneItem.module.scss";
import cn from "classnames";
import ContactItem from "../ContactItem";

const PhoneItem = ({ withIcon, baseFontSize = 18, iconSize = 37 }) => {
  return (
    <ContactItem
      title={
        <div
          style={{ fontSize: `${baseFontSize}px` }}
          className={styles.phoneBlock}
        >
          <div className={styles.phoneBlock__title}>
            <a className={"ws-nowrap-text"} href="tel:88005553207">
              {withIcon ? (
                <span
                  style={{ fontSize: `${iconSize}px` }}
                  className={cn("icon-viber")}
                >
                  <span className="path1"></span>
                  <span className="path2"></span>
                </span>
              ) : null}
              <span
                className={cn({
                  [styles.phoneBlock__telWithIcon]: withIcon,
                  [styles.phoneBlock__telWithoutIcon]: !withIcon,
                })}
              >
                8 800 555 32 07
              </span>
            </a>
          </div>
        </div>
      }
    >
      <p className={styles.phoneBlock__text}>
        <span className={"ws-nowrap-text"}>Позвонить</span>{" "}
        <span className={"ws-nowrap-text"}>с 8:00 до 21:00</span>
        <br />
        <span className="ws-nowrap-text">время Московское</span>
      </p>
    </ContactItem>
  );
  // <div
  //   style={{ fontSize: `${baseFontSize}px` }}
  //   className={styles.phoneBlock}
  // >
  //   <div className={styles.phoneBlock__title}>
  //     <a className={"ws-nowrap-text"} href="tel:88005553207">
  //       {withIcon ? (
  //         <span
  //           style={{ fontSize: `${iconSize}px` }}
  //           className={cn("icon-viber")}
  //         >
  //           <span className="path1"></span>
  //           <span className="path2"></span>
  //         </span>
  //       ) : null}
  //       <span
  //         className={cn({
  //           [styles.phoneBlock__telWithIcon]: withIcon,
  //           [styles.phoneBlock__telWithoutIcon]: !withIcon,
  //         })}
  //       >
  //         8 800 555 32 07
  //       </span>
  //     </a>
  //   </div>
  //   <div
  //     className={cn({
  //       [styles.phoneBlock__delimiterWithIcon]: withIcon,
  //       [styles.phoneBlock__delimiterWithoutIcon]: !withIcon,
  //     })}
  //   ></div>
  //   <p className={styles.phoneBlock__text}>
  //     <span className={"ws-nowrap-text"}>Позвонить с 8:00 до 21:00</span>
  //     <br />
  //     <span className="ws-nowrap-text">время Московское</span>
  //   </p>
  // </div>
  // );
};

export default PhoneItem;

// <div className={styles.callContainer__phone}>
//   <a className={styles.iconItem} href="123">
//     <span className={"icon-viber"}>
//       <span className="path1"></span>
//       <span className="path2"></span>
//     </span>
//   </a>
//   <span className="ws-nowrap-text">
//     <a href="tel:88005553207">8 800 555 32 07</a>
//   </span>{" "}
// </div>;
