/* eslint-disable no-debugger */
import {
  UPDATE_FILES_UPLOAD_ERRORS,
  ADD_UPLOADED_FILE,
  ADD_UPLOADED_FILE_ERROR,
} from "../constants";
// import { errorList } from "./errorList";
import sendFileToServerService from "../../api/services/sendFileToServerService";

export const updateFilesUploadErrors = (aErrors) => (dispatch) => {
  dispatch({ type: UPDATE_FILES_UPLOAD_ERRORS, aErrors });
};

export const uploadFileToServer = (oFile) => (dispatch) => {
  console.log(dispatch);
  const reader = new FileReader();

  reader.readAsBinaryString(oFile);

  reader.onload = async function () {
    let sData = reader.result;

    try {
      const response = await sendFileToServerService.postSendFileToServer(
        sData
      );
      debugger;
      dispatch({ type: ADD_UPLOADED_FILE, guid: response.guid, oFile });
    } catch (error) {
      dispatch({ type: ADD_UPLOADED_FILE_ERROR, uploadError: error });
      console.log(error);
    }
    console.log(reader.result);
  };

  reader.onerror = function (e) {
    console.log(e);
    console.log(reader.error);
  };

  //
  // reader.onloadend = function (result) {
  //   console.log(result);
  //   console.log("Завершение зарузки файла", reader.result);
  // };
};
