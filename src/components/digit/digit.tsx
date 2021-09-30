import { FC } from "react";
import { useDispatch } from "react-redux";
import { DigitProps } from "./digit-props";
import { digitAppended } from "../../store/slices/display"

export const Digit: FC<DigitProps> = (p) => {
  const dispatch = useDispatch();

  const { symbol, mnemonics } = p;
  return (
    <div
      className="digit"
      onClick={() => dispatch(digitAppended(symbol))}
    >{symbol}
      {
        typeof mnemonics === "string"
          ? (<div className="sub">{mnemonics}</div>)
          : null
      }
    </div>
  );
}