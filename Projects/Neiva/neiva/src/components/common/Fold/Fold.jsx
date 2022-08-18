import { useState } from "react";
import { Collapse } from "@material-ui/core";
import styles from "./Fold.module.scss";
import cn from "classnames";

// eslint-disable-next-line react/prop-types
const Fold = ({ foldText, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.fold}>
      <div
        className={cn(styles.fold__mainBlock, {
          [styles.active]: isOpen,
        })}
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
      >
        <h3 className={cn("ws-title-h3")}>{foldText}</h3>
        <span className="icon-wide-arrow-right"></span>
      </div>

      <Collapse orientation="horizontal" in={isOpen}>
        {children}
      </Collapse>
    </div>
  );
};

export default Fold;
