import createNumberMask from "text-mask-addons/dist/createNumberMask";

export const amount = createNumberMask({
  prefix: "",
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: " ",
  allowDecimal: true,
  decimalSymbol: ",",
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 10, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
  type: "text",
});

export const phone = [
  "+",
  "7",
  "(",
  /\d/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];

export const passport = [
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const birthday = "__.__.____";

export const phone_confirmation = [/\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/];
export const email_confirmation = [/\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/];
