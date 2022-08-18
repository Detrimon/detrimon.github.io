import { UPDATE_ERROR, RESET_ERROR } from "../constants";
import { errorList } from "../../config/errorList";

export const resetErrorHandler = () => (dispatch) => {
  dispatch({ type: RESET_ERROR });
};

export const errorHandler = (error) => (dispatch) => {
  let message = "";
  const eCode = error.code;
  const eMessage = error.message;

  if (errorList[eCode]) {
    message = errorList[eCode];
  } else {
    message = `${eMessage} ( ${eCode} )`;
  }

  dispatch({ type: UPDATE_ERROR, message });
};
