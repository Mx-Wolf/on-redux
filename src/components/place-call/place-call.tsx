import classNames from "classnames";
import { FC } from "react";
import { useCallableFlag } from "../../store/hooks/use-callable-flag";

import classes from "./place-call.module.scss";

export const PlaceCall: FC = () => {
  const disabled = useCallableFlag();

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