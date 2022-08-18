import { connect } from "react-redux";
import {
  oVerificationFieldSelector,
  masterDataStatusSelector,
  masterDataDataSelector,
} from "../../redux/selectors";

const mapState = (state) => ({
  emailVerificationStatus: oVerificationFieldSelector(state, {
    fieldName: "email",
  }),
  phoneVerification: oVerificationFieldSelector(state, {
    fieldName: "phone",
  }),
  masterDataStatus: masterDataStatusSelector(state),
  masterData: masterDataDataSelector(state),
});

export const connector = connect(mapState);
