import produce from "immer";
import {
  REQUEST,
  SUCCESS,
  FAILURE,
  VERIFY_EMAIL_OR_PHONE,
  VERIFY_PIN,
  SET_TIMER,
  RESET_VERIFICATION_STATUS,
} from "../constants";

const initialState = {
  email: {
    status: "none", // "none", "requested", "pinSends", "completed"
    timerSec: undefined,
    responseWaiting: false,
    responseReceived: false,
    token: "",
    error: null,
    isHalt: true,
    formId: null, // У каждой формы должен быть свой GUID
  },
  phone: {
    status: "none", // "none", "requested", "pinSends", "completed"
    timerSec: undefined,
    responseWaiting: false,
    responseReceived: false,
    token: "",
    error: null,
    isHalt: true,
    formId: null,
  },
};

export default produce((draft = initialState, action) => {
  const { type, fieldName, timeSec, sToken, formId } = action;

  switch (type) {
    case VERIFY_EMAIL_OR_PHONE + REQUEST:
      draft[fieldName].responseWaiting = true;
      draft[fieldName].responseReceived = false;
      draft[fieldName].status = "requested";
      draft[fieldName].formId = formId;
      break;
    case VERIFY_EMAIL_OR_PHONE + SUCCESS:
      draft[fieldName].responseWaiting = false;
      draft[fieldName].responseReceived = true;
      draft[fieldName].token = sToken;
      draft[fieldName].status = "requested";
      break;
    case VERIFY_EMAIL_OR_PHONE + FAILURE:
      draft[fieldName].responseWaiting = false;
      draft[fieldName].responseReceived = false;
      draft[fieldName].status = "none";
      draft[fieldName].formId = null;
      break;
    case VERIFY_PIN + REQUEST:
      draft[fieldName].responseWaiting = true;
      draft[fieldName].responseReceived = false;
      draft[fieldName].status = "pinSends";
      break;
    case VERIFY_PIN + SUCCESS:
      draft[fieldName].responseWaiting = false;
      draft[fieldName].responseReceived = true;
      draft[fieldName].status = "completed";
      draft[fieldName].isHalt = true;
      draft[fieldName].timerSec = undefined;
      draft[fieldName].error = null;
      break;
    case VERIFY_PIN + FAILURE:
      draft[fieldName].responseWaiting = false;
      draft[fieldName].responseReceived = false;
      draft[fieldName].status = "requested";
      break;
    case SET_TIMER:
      draft[fieldName].timerSec = timeSec;
      draft[fieldName].isHalt = false;
      break;
    case RESET_VERIFICATION_STATUS:
      draft[fieldName].timerSec = undefined;
      draft[fieldName].responseWaiting = false;
      draft[fieldName].responseReceived = false;
      draft[fieldName].status = "none";
      draft[fieldName].error = null;
      draft[fieldName].isHalt = true;
      draft[fieldName].token = "";
      draft[fieldName].formId = null;
      break;
    default:
      return draft;
  }
});
