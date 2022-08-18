/* eslint-disable react/prop-types */
import { withCookies } from "../../services/cookies";
import { useEffect } from "react";
import { connector } from "./connector";

const ReadCookieOnLoad = ({ cookies, updateStoreFromCookies }) => {
  useEffect(() => {
    updateStoreFromCookies(cookies);
  }, []);

  return <></>;
};

export default connector(withCookies(ReadCookieOnLoad));
