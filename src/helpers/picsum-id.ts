import { simple1000 } from "./check-sum";
import { checkTenDigitRule } from "./ten-digit-rule";

interface PicsumProps{
  display:string;
}
export const INVALID_PICSUM_ID = "";
export const getPicsumId = ({display}:PicsumProps)=>checkTenDigitRule(display)?simple1000(display):INVALID_PICSUM_ID;