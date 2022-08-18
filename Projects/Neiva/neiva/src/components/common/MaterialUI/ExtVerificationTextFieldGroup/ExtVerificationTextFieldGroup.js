/* eslint-disable react/prop-types */
import MaskedTextField from "../MaskedTextField";
import { connector } from "./connector";
import { Collapse, makeStyles } from "@material-ui/core";
import { Confirm } from "../ExtendedTextField/Confirm";
import Timer from "../Timer";

const useStyles = makeStyles(() => ({
  success: {
    "& .MuiFormHelperText-root.Mui-disabled": {
      color: "#1b9947",
    },
  },
  error: {
    "& .MuiFormHelperText-root": {
      color: "#f44336",
    },
  },
}));

const ExtVerificationTextFieldGroup = ({
  name,
  formId,
  values,
  touched,
  errors,
  onChange,
  onBlur,
  verifyEmailOrPhone,
  verifyPin,
  verificationStatus,
  inputPinRef,
  activeFormId,
  verifiedValue,
  setFieldValue,
}) => {
  const classes = useStyles();
  return (
    <>
      <MaskedTextField
        name={name}
        values={values}
        verifiedValue={verifiedValue}
        setFieldValue={setFieldValue}
        touched={touched}
        errors={errors}
        onChange={onChange}
        onBlur={onBlur}
        className={
          verificationStatus === "completed"
            ? classes.success
            : formId === activeFormId &&
              ["none", "requested", "pinSends"].includes(verificationStatus)
            ? classes.error
            : null
        }
        helperText={
          (touched[name] && errors[name]) ||
          (verificationStatus === "completed"
            ? "Проверено"
            : formId === activeFormId &&
              ["none", "requested", "pinSends"].includes(verificationStatus)
            ? "Получите пин-код для подтверждения"
            : "")
        }
        disabled={["requested", "pinSends", "completed"].includes(
          verificationStatus
        )}
        adormentProps={{
          endAdornment:
            verificationStatus === "none" ? (
              <Confirm
                label="получить&nbsp;код"
                onRef={inputPinRef}
                action={() => {
                  verifyEmailOrPhone(formId, name, values[name]);
                }}
              />
            ) : verificationStatus === "completed" ? null : (
              <Timer
                formId={formId}
                name={name}
                message="повторить&nbsp;через"
              />
            ),
        }}
      />

      {/* Подтверждение Телефона / Почты */}
      <Collapse
        orientation="horizontal"
        in={
          formId === activeFormId &&
          ["requested", "pinSends"].includes(verificationStatus)
        }
      >
        <MaskedTextField
          name={`${name}_confirmation`}
          values={values}
          touched={touched}
          errors={errors}
          onChange={(e) => {
            onChange(e);
            const currentValue = e.target?.value?.match(/\d+/g)?.join("");

            if (currentValue.length === 6) {
              verifyPin(name, currentValue, values[name]);
            }
          }}
          onBlur={onBlur}
          disabled={
            formId === activeFormId && verificationStatus === "pinSends"
          }
          showMask
          placeholderChar="●"
          guide
          inputRef={inputPinRef}
        />
      </Collapse>
    </>
  );
};

export default connector(ExtVerificationTextFieldGroup);
