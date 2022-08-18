/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import * as Helpers from "../helpers";

import MaskedInput from "react-text-mask";
import NeivaTextField from "../NeivaTextField";
import * as Mask from "../config/masksDescription";
import placeholders from "../config/placeholders";

const TextMaskCustom = (props) => {
  const { inputRef, ...other } = props;
  return <MaskedInput {...other} ref={inputRef} />;
};

const MaskedTextField = (props) => {
  const {
    name,
    values,
    verifiedValue,
    setFieldValue,
    touched,
    errors,
    helperText,
    onChange,
    onBlur,
    showMask = false,
    disabled,
    className,
    adormentProps,
    placeholderChar,
    guide = false,
    inputRef,
  } = props;

  useEffect(() => {
    if (!verifiedValue || !Mask[name]) return;
    setFieldValue && setFieldValue(name, verifiedValue);
  }, [verifiedValue]);

  const inputAdormentProps =
    values[name] && !errors[name] ? { ...adormentProps } : null;

  const inputMaskProps = Mask[name]
    ? {
        value: values[name],
        onChange: (e) => Helpers.handleChange(e, onChange, setIsDealWith),
        placeholder: placeholders[name],
        inputComponent: TextMaskCustom,
        inputProps: {
          mask: Mask[name],
          guide: guide,
          showMask,
          placeholderChar,
        },
      }
    : null;

  const [isDealWith, setIsDealWith] = useState(false);

  const inputProps = { ...inputAdormentProps, ...inputMaskProps };

  return (
    <NeivaTextField
      {...props}
      name={name}
      values={values}
      touched={touched}
      errors={errors}
      onBlur={onBlur}
      InputProps={inputProps}
      className={className}
      disabled={disabled}
      verifiedValue={verifiedValue}
      setFieldValue={setFieldValue}
      guide={guide}
      isError={Helpers.defaultIsError(name, touched, errors, isDealWith)}
      helperText={
        helperText ||
        Helpers.defaultHelperText(name, touched, errors, isDealWith)
      }
      inputRef={inputRef}
    />
  );
};

export default MaskedTextField;
