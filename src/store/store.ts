import { configureStore } from "@reduxjs/toolkit"
import { reducer } from "./reducer"

export const createStore = () => {
  return configureStore({
    reducer
  });
}

export type RootState = ReturnType<ReturnType<typeof createStore>["getState"]>