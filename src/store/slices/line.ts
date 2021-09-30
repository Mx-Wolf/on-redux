import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LineState } from "../state";

export const {
  actions: {
    changed,
  },
  reducer,
} = createSlice({
  initialState: "online" as LineState,
  name: "line",
  reducers: {
    changed(
      _state,
      action: PayloadAction<LineState>,
    ) {
      return action.payload;
    },
  },
});