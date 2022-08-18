import { connect } from "react-redux";
import {
  updateFilesUploadErrors,
  uploadFileToServer,
} from "../../../../redux/actions/uploadFilesActions";
import { updateFilesUploadErrorsSelector } from "../../../../redux/selectors";

const mapState = (state) => ({
  uploadErrorsList: updateFilesUploadErrorsSelector(state),
});

const mapDispatch = {
  updateFilesUploadErrors,
  uploadFileToServer,
};

export const connector = connect(mapState, mapDispatch);
