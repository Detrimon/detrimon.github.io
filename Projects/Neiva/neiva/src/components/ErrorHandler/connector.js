import { connect } from "react-redux";
import { errorHandlerSelector } from "../../redux/selectors";
import { resetErrorHandler } from "../../redux/actions/errorHandlerActions";

const mapState = (state) => ({
  oErrorHandler: errorHandlerSelector(state),
});

const mapDispatch = {
  resetErrorHandler,
};

export const connector = connect(mapState, mapDispatch);
