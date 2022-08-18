import { connect } from "react-redux";
import { resetVerificationStatus } from "../../../../redux/actions/debtPayFormActions";
import { timerSecSelector, isHaltSelector } from "../../../../redux/selectors";

const mapState = (state, { name }) => {
  return {
    timerSec: timerSecSelector(state, { name }),
    isHalt: isHaltSelector(state, { name }),
  };
};

const mapDispatch = {
  resetVerificationStatus,
};

export const connector = connect(mapState, mapDispatch);
