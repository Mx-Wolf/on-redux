import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      action: PayloadAction<string | number>,
    ) {
      return state + action.payload;
    },

    lastDigitRemoved(state) {
      return state.slice(0, -1);
    }
  }
});