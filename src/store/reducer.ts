import { UserAppendedDigitToNumber } from "./actions";
import { State } from "./state";

const initialState: State = {
  display: "",
  favorites: [],
  history: [],
  line: "online",
  rejected: [],
};

const ensureInitialized = (state: State | undefined): State => state || initialState;

export const reducer = (
  state: State | undefined,
  action: UserAppendedDigitToNumber,
): State => {
  const workingState = ensureInitialized(state);
  return workingState;
}