import { TextField } from "@material-ui/core";
import { Confirm } from "./Confirm";

const ExtendedTextField = () => {
  return (
    <TextField
      name={"text"}
      variant="outlined"
      InputProps={{
        endAdornment: <Confirm />,
      }}
    ></TextField>
  );
};

export default ExtendedTextField;
