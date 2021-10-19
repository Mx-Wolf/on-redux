import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HistoryEntry, makeDuration } from "../state";

export const {
  actions: {
    placed,
    ended,
  },
  reducer,
} = createSlice({
  name: "history",
  initialState: [] as HistoryEntry[],
  reducers: {
    placed(state, action: PayloadAction<Omit<HistoryEntry, "duration">>) {
      state.push({ ...action.payload, duration: makeDuration(0) });
    },
    ended(state, {payload:{duration,id}}: PayloadAction<Pick<HistoryEntry, "id"|"duration">>) {
      const entry = state.find((e)=>e.id===id);
      if(typeof entry !== "undefined"){
        entry.duration = duration;
      }
    }
  },
});