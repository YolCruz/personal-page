import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface TimerState {
  workMin: string;
  restMin: string;
  min: string;
  sec: string;
  currentSec: number;
}

const initialState: TimerState = {
  workMin: "25",
  restMin: "05",
  min: "25",
  sec: "00",
  currentSec: 0,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    workMin: (state, action: PayloadAction<string>) => {
      state.workMin = action.payload;
    },
  },
});

export const selectTotalSeconds = (state: RootState) => parseInt(state.timer.workMin) * 60;

export const selectTotalDegrees = (state: RootState) => 360 / selectTotalSeconds(state);

export const { workMin } = timerSlice.actions

export default timerSlice.reducer