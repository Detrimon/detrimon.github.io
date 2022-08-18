// import { createSelector } from "reselect";

/**
 * debtPayForm
 */

export const oVerificationFieldSelector = (state, { name }) =>
  state.debtPayForm[name];

export const isHaltSelector = (state, { name }) =>
  state.debtPayForm[name].isHalt;

export const timerSecSelector = (state, { name }) =>
  state.debtPayForm[name].timerSec;

export const verificationStatusSelector = (state, { name }) =>
  state.debtPayForm[name].status;

export const tokenSelector = (state, { name }) => {
  return state.debtPayForm[name].token;
};

export const activeFormIdSelector = (state, { name }) =>
  state.debtPayForm[name].formId;

/**
 * uploadedFiles
 */

export const updateFilesUploadErrorsSelector = (state) =>
  state.uploadedFiles.aErrors;

/**
 * masterData
 */

export const masterDataStatusSelector = (state) => state.masterData.status;
export const masterDataDataSelector = (state) => state.masterData.data;

export const verifiedValueSelector = (state, { name }) =>
  state.masterData.data[name];

/**
 * errorHandler
 */

export const errorHandlerSelector = (state) => state.errorHandler.error;
