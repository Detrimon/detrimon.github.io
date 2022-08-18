import { connect } from "react-redux";
import { updateStoreFromCookies } from "../../redux/actions/cookiesActions";
// import { oVerificationFieldSelector } from "../../redux/selectors";

// const mapState = (state) => ({
//   emailVerificationStatus: oVerificationFieldSelector(state, {
//     fieldName: "email",
//   }),
//   phoneVerification: oVerificationFieldSelector(state, {
//     fieldName: "phone",
//   }),
// });

const mapDispatch = {
  updateStoreFromCookies,
};

export const connector = connect(null, mapDispatch);
