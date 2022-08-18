export const defaultHelperText = (name, touched, errors, isDealWith) => {
  return (touched[name] || isDealWith) && errors[name];
};

export const defaultIsError = (name, touched, errors, isDealWith) => {
  return (touched[name] || isDealWith) && Boolean(errors[name]);
};

export const handleChange = (e, onChange, setIsDealWith) => {
  setIsDealWith(true);
  return onChange(e);
};

export const handleBlur = (e, onBlur, setIsFocus) => {
  setIsFocus(false);
  return onBlur(e);
};
