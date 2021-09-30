import { createSlice } from "@reduxjs/toolkit";
import { phoneListReducer } from "./phone-list";

export const {
  actions: {
    add,
    remove,
  },
  reducer,
} = createSlice({
  name: "rejected",
  initialState: [] as string[],
  reducers: phoneListReducer,
});