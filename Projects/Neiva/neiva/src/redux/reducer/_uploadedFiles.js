/* eslint-disable no-debugger */
import produce from "immer";
import {
  UPDATE_FILES_UPLOAD_ERRORS,
  ADD_UPLOADED_FILE,
  ADD_UPLOADED_FILE_ERROR,
} from "../constants";

const initialState = {
  aErrors: [],
  oUploadedFiles: {},
  /* 
  oUploadedFiles: {
    "file_GUID_from_server_1": oFile1,
    "file_GUID_from_server_2": oFile2,
    ... есть имя файла и размер. Будем брать отсюда. Может впредь потребуется подгрузить файл еще раз.. 

  }
  */
};

export default produce((draft = initialState, action) => {
  const { type, aErrors, oFile, guid, uploadError } = action;

  switch (type) {
    case UPDATE_FILES_UPLOAD_ERRORS:
      draft.aErrors = [...aErrors];
      break;
    case ADD_UPLOADED_FILE:
      debugger;
      draft.oUploadedFiles[guid] = { done: false, file: oFile };
      break;
    case ADD_UPLOADED_FILE_ERROR:
      draft.aErrors.push(uploadError.message);
      break;
    default:
      return draft;
  }
});
