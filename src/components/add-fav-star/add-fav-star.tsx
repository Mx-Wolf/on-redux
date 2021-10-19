import classNames from "classnames";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useDisableByTenDigitRule } from "../../store/hooks/use-disable-by-ten-digit-rule";
import { useFavRule } from "../../store/hooks/use-fav-rule";
import { useFavorableValue } from "../../store/hooks/use-favorable-value";
import { add, remove } from "../../store/slices/favorites";
import { makePhone } from "../../store/state";

import classes from "./add-fav-star.module.scss";

export const AddFavStar: FC = () => {
  const disabled = useDisableByTenDigitRule();
  const favorite = useFavRule();
  const current = useFavorableValue();
  const dispatch = useDispatch();
  return (
    <button
      className={classNames("fa fa-star-o dig", { [classes["favorite"]]: favorite })}
      aria-hidden="true"
      disabled={disabled}
      onClick={() => dispatch(favorite ? remove(makePhone(current)) : add(makePhone(current)))}
    />
  );
}