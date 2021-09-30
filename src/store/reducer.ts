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
  const {payload,type} = action;
  switch(type){
    case "USER_APPENDED_DIGIT_TO_NUMBER": return {
      ...workingState, 
      display: workingState.display + payload.digit,
    };
  }
  return workingState;
}