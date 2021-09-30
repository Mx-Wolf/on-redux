import { configureStore } from "@reduxjs/toolkit"
import { reducer } from "./reducer"

export const createStore = () => {
  return configureStore({
    reducer
  });
}