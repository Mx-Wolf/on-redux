import { checkTenDigitRule } from "./ten-digit-rule";

interface FavorableProps {
  display: string;
}
const EMPTY_LITERAL = "";
export const getFavorableValue = (
  state: FavorableProps,
) => checkTenDigitRule(state)
    ? state.display
    : EMPTY_LITERAL;