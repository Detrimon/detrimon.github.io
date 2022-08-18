/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { connector } from "./connector";
// import cn from "classnames";
import { Formik } from "formik";
import { ThemeProvider, Container } from "@material-ui/core";
import { customFormElementsTheme } from "../../common/MaterialUI/customFormElementsTheme";
import NeivaTextField from "../../common/MaterialUI/NeivaTextField";
import { SignupSchema } from "../../common/MaterialUI/config/formSchema";
// import Placeholders from "../../common/MaterialUI/config/placeholders";
// import Labels from "../../common/MaterialUI/config/labels";
// import * as Messages from "../../common/MaterialUI/config/messages";
// import MaskedTextField from "../../common/MaterialUI/MaskedTextField";
import ExtVerificationTextFieldGroup from "../../common/MaterialUI/ExtVerificationTextFieldGroup";
import BtnSubmit from "../../common/MaterialUI/BtnSubmit";
import UploadFiles from "./UploadFiles";

import styles from "./WriteUsForm.module.scss";

const WriteUsForm = ({ masterData }) => {
  return (
    <ThemeProvider theme={customFormElementsTheme}>
      <Container>
        <Formik
          //           // fio --> passport_number --> date-picker-dialog (Дата рождения)
          //           // --> contract_number --> phone --> email --> amount
          initialValues={masterData}
          enableReinitialize
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // console.log(type);
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
                <NeivaTextField
                  name={"fio"}
                  values={values}
                  touched={touched}
                  errors={errors}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <NeivaTextField
                  name={"contract_number"}
                  values={values}
                  touched={touched}
                  errors={errors}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required={false}
                />
                <ExtVerificationTextFieldGroup
                  name="phone"
                  values={values}
                  touched={touched}
                  errors={errors}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  inputPinRef={phonePinRef}
                  // formId={formId}
                  setFieldValue={setFieldValue}
                />
                <ExtVerificationTextFieldGroup
                  name="email"
                  values={values}
                  touched={touched}
                  errors={errors}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  inputPinRef={emailPinRef}
                  // formId={formId}
                  setFieldValue={setFieldValue}
                />
                <NeivaTextField
                  name={"msg_text"}
                  multiline
                  minRows={3}
                  maxRows={6}
                  values={values}
                  touched={touched}
                  errors={errors}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required={false}
                  variant={"outlined"}
                />
                <UploadFiles></UploadFiles>
                <div className={styles.writeUsForm__btn}>
                  <BtnSubmit
                    isSubmitting={isSubmitting}
                    dirty={dirty}
                    isValid={isValid}
                  >
                    Отправить обращение
                  </BtnSubmit>
                </div>
                <div className={styles.writeUsForm__policy}>
                  Нажимая кнопку Отправить обращение, вы соглашаетесь с{" "}
                  <a href="">Условиями публичной оферты</a> и{" "}
                  <a href="">Политикой обработки данных</a>.
                </div>
              </form>
            );
          }}
        </Formik>
      </Container>
    </ThemeProvider>
  );
};

export default connector(WriteUsForm);
