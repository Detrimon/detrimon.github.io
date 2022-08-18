/* eslint-disable react/prop-types */
import React from "react";
import cn from "classnames";
import "../../../scss/styles.scss";

import styles from "./FoldQuestions.module.scss";

const FoldQuestions = ({
  children, // ["Абзац 1", "Абзац 2", Абзац 3, ...]
}) => {
  // const description = aDescription.map(function (item) {
  //   return (
  //     item &&
  //     typeof item === "string" && (
  //       <p className={styles.foldContent__description}>{item}</p>
  //     )
  //   );
  // });

  return (
    <div className={cn("flex-grid", styles.foldQuestions)}>
      <div className={"col-3 col-lg-1 col-lg-hide"}></div>
      <div className={"col-6 col-lg-3 col-lg-full"}>
        <div className={styles.foldQuestions__contentBlock}>{children}</div>
      </div>
    </div>
  );
};

export default FoldQuestions;
