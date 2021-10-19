import { checkTenDigitRule } from "./ten-digit-rule";

interface FavorableProps {
  display: string;
}
const EMPTY_LITERAL = "";
export const getFavorableValue = (
  {display}: FavorableProps,
) => checkTenDigitRule(display)
    ? display
    : EMPTY_LITERAL;