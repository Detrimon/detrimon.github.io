/* eslint-disable react/prop-types */
import React from "react";
import { connector } from "./connector";
import Button from "@material-ui/core/Button";
// eslint-disable-next-line no-debugger
const BtnSubmit = ({
  children,
  isSubmitting,
  dirty,
  isValid,
  emailVerificationStatus,
  phoneVerificationStatus,
}) => {
  return (
    <Button
      variant="contained"
      disabled={
        isSubmitting ||
        !dirty ||
        !isValid ||
        emailVerificationStatus !== "completed" ||
        phoneVerificationStatus !== "completed"
      }
      type="submit"
    >
      {children}
    </Button>
  );
};

export default connector(BtnSubmit);
