import classNames from "classnames";
import { FC } from "react";
import { useSelector } from "react-redux";
import { checkTenDigitRule } from "../../helpers/ten-digit-rule";


import classes from "./place-call.module.scss";

export const PlaceCall: FC = () => {
  const disabled = useSelector(checkTenDigitRule);
  return (
    <button
      className={classNames({ [classes["disabled"]]: disabled }, "call")}
      disabled
    >
      <i className={classNames("fa fa-phone", classes["fa-phone"])} aria-hidden="true" />
    </button>
  );
}