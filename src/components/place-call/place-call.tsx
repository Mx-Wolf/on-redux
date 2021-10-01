import classNames from "classnames";
import { FC } from "react";
import { useDisableByTenDigitRule } from "../../store/hooks/use-disable-by-ten-digit-rule";

import classes from "./place-call.module.scss";

export const PlaceCall: FC = () => {
  const disabled = useDisableByTenDigitRule()
  return (
    <button
      className={classNames({ [classes["disabled"]]: disabled }, "call")}
      disabled={disabled}
    >
      <i
        className={classNames("fa fa-phone", classes["fa-phone"])}
        aria-hidden="true" />
    </button>
  );
}