import { FC } from "react";
import { useDispatch } from "react-redux";
import { DigitProps } from "./digit-props";
import { digitAppended } from "../../store/slices/display"

export const Digit: FC<DigitProps> = (p) => {
  const dispatch = useDispatch();

  const { symbol, mnemonics } = p;
  return (
    <button
      className="digit"
      onClick={() => dispatch(digitAppended(symbol))}
    >{symbol}<div className="sub">{typeof mnemonics === "string"?mnemonics:"\xa0"}</div>
    </button>
  );
}