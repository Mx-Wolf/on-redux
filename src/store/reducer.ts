import { reducer as display } from "./slices/display";
import { reducer as line } from "./slices/line";
import { reducer as favorites } from "./slices/favorites";
import { reducer as history } from "./slices/history";
import { reducer as rejected } from "./slices/rejected";

export const reducer = {
  display,
  line,
  favorites,
  history,
  rejected,
};