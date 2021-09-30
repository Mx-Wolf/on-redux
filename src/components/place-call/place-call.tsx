import classNames from "classnames";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import classes from "./place-call.module.scss";

export const PlaceCall: FC = () => {
  const disabled = useSelector((state: RootState) => state.display.length !== 10);
  return (
    <div
      className={classNames({ [classes["disabled"]]: disabled }, "call")}
    >
      <i className="fa fa-phone" aria-hidden="true" />
    </div>
  );
}