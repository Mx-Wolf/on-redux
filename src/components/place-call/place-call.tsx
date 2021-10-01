import classNames from "classnames";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useCallableFlag } from "../../store/hooks/use-callable-flag";
import { changed } from "../../store/slices/line";

import classes from "./place-call.module.scss";

export const PlaceCall: FC = () => {
  const disabled = useCallableFlag();

  const dispatch = useDispatch();
  return (
    <button
      className={classNames({ [classes["disabled"]]: disabled }, "call")}
      disabled={disabled}
      onClick={() => dispatch(changed("engaged"))}
    >
      <i
        className={classNames("fa fa-phone", classes["fa-phone"])}
        aria-hidden="true" />
    </button>
  );
}