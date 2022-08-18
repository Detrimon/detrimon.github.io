import { connect } from "react-redux";
import {
  verifyEmailOrPhone,
  verifyPin,
} from "../../../../redux/actions/debtPayFormActions";
import {
  verificationStatusSelector,
  // responseWaitingSelector,
  // responseReceivedSelector,
  activeFormIdSelector,
  verifiedValueSelector,
} from "../../../../redux/selectors";

const mapState = (state, { name }) => {
  return {
    verificationStatus: verificationStatusSelector(state, { name }),
    activeFormId: activeFormIdSelector(state, { name }),
    verifiedValue: verifiedValueSelector(state, { name }),

    // responseWaiting: responseWaitingSelector(state, { name }),
    // responseReceived: responseReceivedSelector(state, { name }),
  };
};

const mapDispatch = {
  verifyEmailOrPhone,
  verifyPin,
};

export const connector = connect(mapState, mapDispatch);
