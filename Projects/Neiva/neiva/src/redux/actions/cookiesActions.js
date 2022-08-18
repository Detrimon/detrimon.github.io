import { UPDATE_STORE_FROM_COOKIES, VERIFY_PIN, SUCCESS } from "../constants";
// import { errorList } from "./errorList";

export const updateStoreFromCookies = (cookies) => (dispatch) => {
  // Отбираем те куки, которые нам действительно нужны в Store
  dispatch({ type: UPDATE_STORE_FROM_COOKIES, cookies });
  ["phone", "email"].forEach(function (item) {
    if (cookies[item] && cookies[`${item}Token`])
      dispatch({
        type: VERIFY_PIN + SUCCESS,
        fieldName: item,
        sToken: cookies[`${item}Token`],
      });
  });
  if (cookies.phone && cookies.phoneToken)
    dispatch({
      type: VERIFY_PIN + SUCCESS,
      fieldName: "phone",
      sToken: cookies.phoneToken,
    });
};
