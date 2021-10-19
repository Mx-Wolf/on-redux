import { PayloadAction } from "@reduxjs/toolkit";
import { PhoneNumber } from "../state";

export const phoneListReducer = {
  add(state: PhoneNumber[], action: PayloadAction<PhoneNumber>) {
    return [...state, action.payload];
  },
  remove(state: PhoneNumber[], {payload}: PayloadAction<PhoneNumber>) {
    const index = state.findIndex((phone) => phone.value === payload.value);
    if (index < 0) {
      return state;
    }
    return [
      ...state.slice(0, index - 1),
      ...state.slice(index + 1),
    ];
  }
}
