import { createSlice } from "@reduxjs/toolkit";
import { PhoneNumber } from "../state";
import { phoneListReducer } from "./phone-list";

export const {
  actions: {
    add,
    remove,
  },
  reducer,
} = createSlice({
  name: "rejected",
  initialState: [] as PhoneNumber[],
  reducers: phoneListReducer,
});