// import { useState } from "react";
import format from "date-fns/format";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  // DatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ru from "date-fns/locale/ru";
import * as Messages from "../config/messages";

class LocalizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date) {
    return format(date, "d MMMM", { locale: this.locale });
  }
}

const Calendar = ({ ...rest }) => {
  return (
    <MuiPickersUtilsProvider utils={LocalizedUtils} locale={ru}>
      <KeyboardDatePicker
        {...rest}
        variant="inline"
        format="dd.MM.yyyy"
        maxDate={new Date()}
        placeholder={rest.placeholder}
        minDateMessage={Messages.minDateMessage}
        views={["year", "month", "date"]}
        error={rest.error}
        touched={rest.touched}
        toolbarFormat="dd.MM.yyyy"
      />
    </MuiPickersUtilsProvider>
  );
};

export default Calendar;
