import * as Yup from "yup";

const phoneRegExp = /^\+7\([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/;
const passportRegExp = /^[0-9]{2} [0-9]{2} [0-9]{6}$/;

export const SignupSchema = Yup.object().shape({
  fio: Yup.string().required("Введите ваши ФИО"),
  passport: Yup.string()
    .typeError("Некорректный формат серии и номера паспорта")
    .required("Введите серию и номер вашего паспорта")
    .matches(passportRegExp, "Некорректные паспортные данные"),
  contract_number: Yup.number(),
  phone: Yup.string()
    .required("Введите ваш телефонный номер")
    .matches(phoneRegExp, "Укажите корректный номер"),
  email: Yup.string()
    .email("введен неверный email")
    .required("Введите ваш адрес электронной почты"),
  birthday: Yup.date()
    .nullable()
    .required("Введите дату вашего рождения")
    .typeError("Дата введена некорректно"),
  amount: Yup.string().required("Введите сумму платежа"),
});
