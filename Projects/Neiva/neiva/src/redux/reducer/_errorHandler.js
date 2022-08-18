import produce from "immer";
import { UPDATE_ERROR, RESET_ERROR } from "../constants";

const initialState = {
  error: {
    // code: null,
    message: "",
    datetime: null,
  },
};

export default produce((draft = initialState, action) => {
  const { type, message } = action;

  switch (type) {
    case UPDATE_ERROR:
      draft.error.message = message;
      draft.error.datetime = Date.now();
      break;
    case RESET_ERROR:
      draft.error.message = null;
      draft.error.datetime = null;
      break;
    default:
      return draft;
  }
});
