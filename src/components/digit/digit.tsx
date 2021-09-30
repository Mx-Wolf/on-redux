import { FC } from "react";
import { DigitProps } from "./digit-props";

export const Digit: FC<DigitProps> = (p) => {
  const { symbol, mnemonics } = p;
  return (<div className="digit">{symbol}
    {typeof mnemonics === "string" ? (<div className="sub">{mnemonics}</div>) : null}
  </div>)
}