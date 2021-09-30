import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserAppendedDigitToNumberPayload } from "../actions";

export const {
  actions: {
    digitAppended,
    lastDigitRemoved
  },
  reducer,
} = createSlice({
  name: "display",
  initialState: "" as string,
  reducers: {

    digitAppended(
      state,
      action: PayloadAction<UserAppendedDigitToNumberPayload>,
    ) {
      return state + action.payload.digit;
    },

    lastDigitRemoved(state) {
      return state.slice(0, -1);
    }
  }
});