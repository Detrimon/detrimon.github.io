/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { connector } from "./connector";
import cn from "classnames";
import { Formik } from "formik";
import { ThemeProvider, Container } from "@material-ui/core";
import { customFormElementsTheme } from "../../common/MaterialUI/customFormElementsTheme";
import NeivaTextField from "../../common/MaterialUI/NeivaTextField";
import Calendar from "../../common/MaterialUI/Calendar";
import { SignupSchema } from "../../common/MaterialUI/config/formSchema";
import "../../../scss/styles.scss";
import Placeholders from "../../common/MaterialUI/config/placeholders";
import Labels from "../../common/MaterialUI/config/labels";
import * as Messages from "../../common/MaterialUI/config/messages";

import MaskedTextField from "../../common/MaterialUI/MaskedTextField";
import ExtVerificationTextFieldGroup from "../../common/MaterialUI/ExtVerificationTextFieldGroup";
import BtnSubmit from "../../common/MaterialUI/BtnSubmit";

import styles from "./FoldContent.module.scss";

const FoldContent = ({
  formId,
  aDescription, // ["Абзац 1", "Абзац 2", Абзац 3, ...]
  sampleURL, // ссылка на картинку
  sampleDescription, // Образец такой-то
  type, // 1 || 2 || 3 или любой другой
  aFields, // ["fio", "passport", "birthday", "contract", "address", "phone", "email"]
  masterData,
}) => {
  const description = aDescription.map(function (item) {
    return (
      item &&
      typeof item === "string" && (
        <p className={styles.foldContent__description}>{item}</p>
      )
    );
  });

  return (
    <div className={cn("flex-grid", styles.foldContent)}>
      <div
        className={cn(
          "col-4 col-lg-half col-md-full",
          styles.foldContent__descriptionBlock
        )}
      >
        <div className={styles.foldContent__description}>{description}</div>
        <div className={styles.foldContent__example}>
          <figure className={styles.foldContent__figure}>
            <img
              src={sampleURL}
              width="199"
              height="253"
              alt={sampleDescription}
            />
            <figcaption>{sampleDescription}</figcaption>
          </figure>
        </div>
      </div>
      <div
        className={cn(
          "col-5 col-lg-half col-md-full",
          styles.foldContent__formBlock
        )}
      >
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
                  console.log(type);
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
                    {aFields.indexOf("fio") !== -1 ? (
                      <NeivaTextField
                        name={"fio"}
                        values={values}
                        touched={touched}
                        errors={errors}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    ) : null}
                    {aFields.indexOf("passport") !== -1 ? (
                      <MaskedTextField
                        name="passport"
                        values={values}
                        touched={touched}
                        errors={errors}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        showMask={false}
                      />
                    ) : null}
                    {aFields.indexOf("birthday") !== -1 ? (
                      <Calendar
                        id="birthday"
                        name="birthday"
                        label={Labels.birthday}
                        placeholder={Placeholders.calendar}
                        // mask={calendarMask}
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
                    ) : null}
                    {aFields.indexOf("contract") !== -1 ? (
                      <NeivaTextField
                        name={"contract_number"}
                        values={values}
                        touched={touched}
                        errors={errors}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required={false}
                      />
                    ) : null}
                    {aFields.indexOf("address") !== -1 ? (
                      <NeivaTextField
                        name={"address"}
                        values={values}
                        touched={touched}
                        errors={errors}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required={false}
                      />
                    ) : null}
                    {aFields.indexOf("phone") !== -1 ? (
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
                    ) : null}
                    {aFields.indexOf("email") !== -1 ? (
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
                    ) : null}

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
      </div>
    </div>
  );
};

export default connector(FoldContent);
