import { connect } from "react-redux";
import { verificationStatusSelector } from "../../../../redux/selectors";

const mapState = (state) => ({
  emailVerificationStatus: verificationStatusSelector(state, { name: "email" }),
  phoneVerificationStatus: verificationStatusSelector(state, { name: "phone" }),
});

export const connector = connect(mapState);
