import {reducer as display} from "./slices/display";
import {reducer as line} from "./slices/line";
import {reducer as favorites} from "./slices/favorites";

export const reducer = {
  display,
  line,
  favorites
};