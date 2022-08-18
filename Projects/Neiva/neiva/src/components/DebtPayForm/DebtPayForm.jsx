/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { connector } from "./connector";
import { withCookies } from "../../services/cookies";
import { Formik } from "formik";
import { ThemeProvider, Container } from "@material-ui/core";
import { customFormElementsTheme } from "../common/MaterialUI/customFormElementsTheme";
import NeivaTextField from "../common/MaterialUI/NeivaTextField";
import Calendar from "../common/MaterialUI/Calendar";
import { SignupSchema } from "../common/MaterialUI/config/formSchema";
import "../../scss/styles.scss";
import Placeholders from "../common/MaterialUI/config/placeholders";
import Labels from "../common/MaterialUI/config/labels";
import * as Messages from "../common/MaterialUI/config/messages";

import MaskedTextField from "../common/MaterialUI/MaskedTextField";
import ExtVerificationTextFieldGroup from "../common/MaterialUI/ExtVerificationTextFieldGroup";
import BtnSubmit from "../common/MaterialUI/BtnSubmit";

const DebtPayForm = ({ masterData, formId }) => {
  return (
    <ThemeProvider theme={customFormElementsTheme}>
      <Container>
        <Formik
          // fio --> passport_number --> date-picker-dialog (Дата рождения)
          // --> contract_number --> phone --> email --> amount
          initialValues={masterData}
          // enableReinitialize
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            isSubmitting,
            isValid,
            dirty,
            values,
            setFieldValue,
            errors,
            handleChange,
            handleSubmit,
            handleBlur,
            touched,
          }) => {
            const phonePinRef = useRef("");
            const emailPinRef = useRef("");
            return (
              <form onSubmit={handleSubmit}>
                {/* ФИО */}
                <NeivaTextField
                  name={"fio"}
                  values={values}
                  touched={touched}
                  errors={errors}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {/* Серия и номер паспорта */}
                <MaskedTextField
                  name="passport"
                  values={values}
                  touched={touched}
                  errors={errors}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  showMask={false}
                />

                {/* Дата рождения - MaterialUI DatePicker */}
                <Calendar
                  id="birthday"
                  name="birthday"
                  label={Labels.birthday}
                  placeholder={Placeholders.calendar}
                  value={values.birthday}
                  error={touched.birthday && Boolean(errors.birthday)}
                  helperText={touched.birthday && errors.birthday}
                  onChange={(value) => setFieldValue("birthday", value)}
                  onBlur={handleBlur}
                  required
                  fullWidth
                  touched={touched}
                  autoOk
                  disableFuture
                  disableToolbar={false}
                  inputVariant="standard"
                  openTo={"year"}
                  KeyboardButtonProps={{
                    "aria-label": Messages.dateChangeDate,
                  }}
                />

                {/* Номер договора */}
                <NeivaTextField
                  name={"contract_number"}
                  values={values}
                  touched={touched}
                  errors={errors}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required={false}
                />

                {/* Телефон */}
                <ExtVerificationTextFieldGroup
                  name="phone"
                  values={values}
                  touched={touched}
                  errors={errors}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  inputPinRef={phonePinRef}
                  formId={formId}
                  setFieldValue={setFieldValue}
                />

                {/* Email */}
                <ExtVerificationTextFieldGroup
                  name="email"
                  values={values}
                  touched={touched}
                  errors={errors}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  inputPinRef={emailPinRef}
                  formId={formId}
                  setFieldValue={setFieldValue}
                />

                {/* Сумма платежа */}
                <MaskedTextField
                  name="amount"
                  values={values}
                  touched={touched}
                  errors={errors}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  showMask={false}
                />

                <BtnSubmit
                  isSubmitting={isSubmitting}
                  dirty={dirty}
                  isValid={isValid}
                >
                  Оплатить
                </BtnSubmit>
              </form>
            );
          }}
        </Formik>
      </Container>
    </ThemeProvider>
  );
};

export default connector(withCookies(DebtPayForm));
