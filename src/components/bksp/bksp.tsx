import { FC } from "react";
import { useDispatch } from "react-redux";
import { lastDigitRemoved } from "../../store/slices/display"

export const Bksp: FC = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="fa fa-long-arrow-left dig"
      aria-hidden="true"
      onClick={() => dispatch(lastDigitRemoved())}
    />)
}