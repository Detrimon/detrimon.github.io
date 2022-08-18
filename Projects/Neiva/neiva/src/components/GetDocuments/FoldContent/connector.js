import { connect } from "react-redux";
import {
  oVerificationFieldSelector,
  masterDataDataSelector,
} from "../../../redux/selectors";

const mapState = (state) => ({
  emailVerificationStatus: oVerificationFieldSelector(state, {
    fieldName: "email",
  }),
  phoneVerification: oVerificationFieldSelector(state, {
    fieldName: "phone",
  }),
  masterData: masterDataDataSelector(state),
});

export const connector = connect(mapState);
