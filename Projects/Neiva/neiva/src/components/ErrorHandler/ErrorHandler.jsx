/* eslint-disable react/prop-types */
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useEffect, useState } from "react";
import { connector } from "./connector";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function handleClose(setIsOpen) {
  setIsOpen(false);
}

const ErrorHandler = ({ children, oErrorHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (oErrorHandler?.message) setIsOpen(true);
  }, [oErrorHandler.datetime]);
  const errorMessage = oErrorHandler?.message;
  return (
    <div>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={() => handleClose(setIsOpen)}
      >
        <Alert onClose={() => handleClose(setIsOpen)} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
      {children}
    </div>
  );
};

export default connector(ErrorHandler);
