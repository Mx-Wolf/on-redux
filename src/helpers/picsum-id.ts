import { simple1000 } from "./check-sum";
import { checkTenDigitRule } from "./ten-digit-rule";

interface PicsumProps{
  display:string;
}
export const INVALID_PICSUM_ID = "";
export const getPicsumId = (state:PicsumProps)=>checkTenDigitRule(state)?simple1000(state.display):INVALID_PICSUM_ID;