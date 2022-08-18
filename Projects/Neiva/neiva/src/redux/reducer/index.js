import { combineReducers } from "redux";

import masterData from "./_masterData";
import debtPayForm from "./_debtPayForm";
import errorHandler from "./_errorHandler";
import uploadedFiles from "./_uploadedFiles";

export default combineReducers({
  masterData,
  debtPayForm,
  errorHandler,
  uploadedFiles,
});
