// В этом хранилище будут лежать мастер данные.
/* Изначально сюда идет выгрузка из Cookie. Когда данные загружены,
для них выставляется статус "установлены". Если из какой-то формы
произошла смена данных, то это изменение также пишется сюда<div className="

В свою очередь все остальные формы также синхронизируются с данным хранилищем._active

Например, при загрузке страницы, каждый элемент ждет, когда у данного стора выставится статус "установлены"
и только тогда инициализирует свои поля актуальными данными._active

Если в какой-то одной форме была выполнена проверка телефона или Email, происходит обновление данных 
в данном хранилище и во всех остальных формах также появляются актуальные данные.*/

import produce from "immer";
import { UPDATE_STORE_FROM_COOKIES, UPDATE_STORE } from "../constants";

const initialState = {
  data: {
    fio: "",
    passport: "",
    birthday: null,
    contract_number: "",
    phone: "",
    email: "",
    address: "",
  },
  phone: {
    status: "initial", // initial, completed,
    token: null,
  },
  email: {
    status: "initial", // initial, completed updated
    token: null,
  },
  status: "initial", // initial, cookies, updated
};

export default produce((draft = initialState, action) => {
  const { type, cookies, fieldName, token, sFieldValue } = action;

  switch (type) {
    case UPDATE_STORE_FROM_COOKIES:
      if (!cookies) break;
      draft.data.fio = cookies.fio || "";
      draft.data.passport = cookies.passport || "";
      draft.data.birthday = cookies.birthday || null;
      draft.data.contract_number = cookies.contract_number || "";
      draft.data.phone = cookies.phone || "";
      draft.data.email = cookies.email || "";
      draft.data.address = cookies.address || "";
      draft.phone.status = cookies.phoneToken ? "completed" : "initial";
      draft.phone.token = cookies.phoneToken ? cookies.phoneToken : null;
      draft.email.status = cookies.emailToken ? "completed" : "initial";
      draft.email.token = cookies.emailToken ? cookies.emailToken : null;
      draft.status = "cookies";
      break;
    case UPDATE_STORE:
      draft[fieldName].status = "completed";
      draft[fieldName].token = token;
      draft.data[fieldName] = sFieldValue;
      break;
    default:
      return draft;
  }
});
