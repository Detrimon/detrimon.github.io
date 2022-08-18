/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import * as Helpers from "../helpers";

import Placeholders from "../config/placeholders";
import Labels from "../config/labels";
import { TextField } from "@material-ui/core";

const NeivaTextField = ({
  name,
  values,
  verifiedValue,
  setFieldValue,
  multiline,
  minRows,
  maxRows,
  touched,
  errors,
  onChange,
  onBlur,
  required = true,
  InputProps,
  className,
  variant,
  helperText,
  disabled,
  adormentProps,
  guide = false,
  inputRef,
}) => {
  useEffect(() => {
    if (!verifiedValue) return;
    setFieldValue && setFieldValue(name, verifiedValue);
  }, [verifiedValue]);

  const inputAdormentProps =
    values[name] && !errors[name] ? { ...adormentProps } : null;

  const [isDealWith, setIsDealWith] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <TextField
      id={name}
      name={name}
      label={Labels[name]}
      multiline={multiline}
      minRows={minRows}
      maxRows={maxRows}
      placeholder={Placeholders[name]}
      value={values[name]}
      error={Helpers.defaultIsError(name, touched, errors, isDealWith)}
      helperText={
        helperText ||
        Helpers.defaultHelperText(name, touched, errors, isDealWith)
      }
      onChange={(e) => {
        Helpers.handleChange(e, onChange, setIsDealWith);
      }}
      onFocus={() => setIsFocus(true)}
      // on
      onBlur={(e) => Helpers.handleBlur(e, onBlur, setIsFocus)}
      required={required}
      fullWidth
      InputProps={InputProps || inputAdormentProps}
      className={className}
      disabled={disabled}
      variant={variant}
      InputLabelProps={{
        shrink:
          isFocus || Boolean(values[name]) || guide || Boolean(verifiedValue),
      }}
      inputRef={inputRef}
    />
  );
};

export default NeivaTextField;
