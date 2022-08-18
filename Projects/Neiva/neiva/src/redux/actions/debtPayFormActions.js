// import { useSnackbar } from "material-ui-snackbar-provider";
import { ClientManager } from "../../services/cookies";

import { errorHandler } from "./errorHandlerActions";

import {
  VERIFY_EMAIL_OR_PHONE,
  VERIFY_PIN,
  REQUEST,
  SUCCESS,
  FAILURE,
  SET_TIMER,
  RESET_VERIFICATION_STATUS,
  UPDATE_STORE,
} from "../constants";
import // timerSecSelector,
// verificationStatusSelector,
// oVerificationFieldSelector,
// responseWaitingSelector,
// responseReceivedSelector,
"../selectors";

import VerifyService from "../../api/services/verifyService";
import TokenService from "../../api/services/tokenService";
// import menusService from "./http/Stories/menusService";
// import paintsService from "./http/Stories/paintsService";

const cookieManager = new ClientManager();

// export const verifyEmailOrPhone(fieldName, sData) => {
export const verifyEmailOrPhone =
  (formId, fieldName, sData) => async (dispatch) => {
    // const state = getState();

    dispatch({ type: VERIFY_EMAIL_OR_PHONE + REQUEST, formId, fieldName });

    try {
      const response = await VerifyService.postVerify({
        [fieldName]: sData,
      });

      if (response.error) {
        throw new Error(response.error);
      }

      if (response.success === false) {
        // Также надо обработать... Подумать как
      }

      // Во всех остальных случаях считаем, что все ОК и обрабатываем успешные данные.

      const retryTime = response.retryTime;
      const sToken = response[`${fieldName}Token`];

      /* RESPONSE OBJECT:
    {
      success: [boolean],
      emailToken: [string, 50],
      phoneToken: [string, 50],
      retryTime: [int],
      error: {
        code: [string, 50],
        description: [string, 255]
      }
    }
    */
      dispatch({ type: SET_TIMER, fieldName, timeSec: retryTime });
      dispatch({ type: VERIFY_EMAIL_OR_PHONE + SUCCESS, fieldName, sToken });

      // Логика по обработке ответа от сервера
      // Сюда должен прийти:
      /* 
        1. Ответ 200 ОК
        2. guid emailToken
        3. Таймер, который необходимо будет выставить._active
        4. Если ответа не было в течение N секунд, то необходимо 
        вызвать ошибку. Ошибка обрабатывается ниже
      */
    } catch (error) {
      /* 
        1. Если ответа от сервера нет, то предполагаем, что 
        проблемы с сервером. В этом случае пользоватлю показать
        оишбку и установить статус emailRequestStatus в none,
        чтобы пользователь смог снова попробовать выполнить запрос
      */
      // eslint-disable-next-line no-debugger
      dispatch({
        type: VERIFY_EMAIL_OR_PHONE + FAILURE,
        formId,
        fieldName,
        error,
      });
      dispatch(errorHandler(error));
    }

    // Посылаем запрос на сервер

    // Если SUCCESS, то диспатчим SUCCESS

    // Если ошибка, то ERROR
  };

export const verifyPin =
  (fieldName, sData, sFieldValue) => async (dispatch, getState) => {
    // eslint-disable-next-line no-debugger
    // debugger;
    const state = getState();
    dispatch({ type: VERIFY_PIN + REQUEST, fieldName });

    try {
      const response = await TokenService.postToken({
        [`${fieldName}Token`]: state.debtPayForm[fieldName].token,
        [`${fieldName}Pin`]: sData,
      });
      dispatch({ type: VERIFY_PIN + SUCCESS, fieldName, response });
      //TODO: А здесь нам необходимо сохранить новый куки с токеном и сам email
      cookieManager.set(fieldName, sFieldValue);
      cookieManager.set(
        `${fieldName}Token`,
        "LKJlskdjfklsdfjsfj3sdfsdlj<УДАЛИТЬ>Token"
      );
      dispatch({
        type: UPDATE_STORE,
        fieldName,
        sFieldValue,
        token: response.token || "Blflajsflsdj<<УБРАТЬ>>flj",
      }); // TODO: Здесь из API должен приходить какой-то токен, который мы должны хранить как в Cookie, так и в Store
      // dispatch({ type: SET_TIMER, fieldName, timeSec: 12 }); // Вообще timeSec должно прийти с сервера и мы его устанавливаем
      // Логика по обработке ответа от сервера
      // Сюда должен прийти:
      /* 
        1. Ответ 200 ОК
        2. guid emailToken
        3. Таймер, который необходимо будет выставить._active
        4. Если ответа не было в течение N секунд, то необходимо 
        вызвать ошибку. Ошибка обрабатывается ниже
      */
    } catch (error) {
      /* 
        1. Если ответа от сервера нет, то предполагаем, что 
        проблемы с сервером. В этом случае пользоватлю показать
        оишбку и установить статус emailRequestStatus в none,
        чтобы пользователь смог снова попробовать выполнить запрос
      */
      dispatch({ type: VERIFY_PIN + FAILURE, fieldName, error });
      dispatch(errorHandler(error));
    }
  };

export const resetVerificationStatus =
  (formId, fieldName) => (dispatch, getState) => {
    const state = getState().debtPayForm;
    if (state[fieldName].status === "requested") {
      dispatch({ type: RESET_VERIFICATION_STATUS, formId, fieldName });
    }
  };
