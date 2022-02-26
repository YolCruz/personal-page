import { createSlice } from "@reduxjs/toolkit";
import { TimerState } from "./timerSlice";

export interface StylesState {
  mode: number;
  text: string;
  settingsIcon: string;
  conicTimer: string;
}

const initialState: StylesState = {
  mode: 0,
  text: "START",
  settingsIcon: "inline-block",
  conicTimer: "conic-gradient(#be0909 0deg,#2f2f2f 0deg)"
}

export const stylesSlice = createSlice({
  name: "styles",
  initialState,
  reducers: {
    inactive: (state) => {
      
    }
  }
})