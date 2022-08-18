import { createTheme } from "@material-ui/core";
import "../../../scss/styles.scss";

export const customFormElementsTheme = createTheme({
  overrides: {
    MuiContainer: {
      root: {
        maxWidth: "690px !important",
        fontFamily: '"Manrope", sans-serif',
      },
    },
    MuiFormControl: {
      root: {
        display: "block",
        paddingBottom: "20px",
      },
    },
    MuiFormLabel: {
      root: {
        fontFamily: '"Manrope", sans-serif',
        lineHeight: "25px",
      },
    },
    MuiInputBase: {
      root: {
        fontFamily: '"Manrope", sans-serif',
        lineHeight: "18px",
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        // height: "20px",
      },
    },
    MuiTypography: {
      h4: {
        fontSize: "1.125rem",
      },
    },
    MuiFormHelperText: {
      root: {
        position: "absolute",
        textAlign: "right",
        width: "100%",
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: "1.7rem",
      },
    },
    MuiButton: {
      contained: {
        color: "#FCF9EF",
        backgroundColor: "#0A3880",
        padding: "20px 76px",
        borderRadius: "10px",
      },
      label: {
        fontSize: "14px",
      },
    },
  },
});
