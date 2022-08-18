/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { connector } from "./connector";

const Timer = ({
  name,
  message,
  timerSec,
  isHalt,
  resetVerificationStatus,
  formId,
}) => {
  if (!Number.isInteger(timerSec)) return;
  const [time, setTime] = useState(timerSec);

  useEffect(() => {
    if (isHalt) return setTime(0);

    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  }, [time, isHalt]);

  useEffect(() => {
    if (isHalt) {
      return;
    }

    if (time <= 0) {
      setTime(0);
      resetVerificationStatus(formId, name);
    }
  }, [time]);
  return (
    <span>
      {message}&nbsp;{time}&nbsp;секунд
    </span>
  );
};

export default connector(Timer);
