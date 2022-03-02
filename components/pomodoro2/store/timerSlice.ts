import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface TimerState {
  workMin: string;
  restMin: string;
  longRestMin: string;
  min: string;
  sec: string;
  currentSec: number;
  totalSec: number;
  mode: number;
  text: string;
  stepDeg: number;
  borderColor: string;
  workModeColor: string;
  restModeColor: string;
  longRestModeColor: string;
}

const defaultModeColor = "#201B1B";
const workModeColor = "#900D0D";
const restModeColor = "#07691D";
const longRestModeColor = "#077E86";

const initialState: TimerState = {
  workMin: "20",
  restMin: "05",
  longRestMin: "15",
  min: "20",
  sec: "00",
  currentSec: 0,
  totalSec: 1200,
  mode: 0, // 0 - inactive, 1 - work, 2 - rest, 3 - Long rest
  text: "START",
  stepDeg: 0.3, // 360 / total seconds
  borderColor: "#0D58CA",
  workModeColor: defaultModeColor,
  restModeColor: defaultModeColor,
  longRestModeColor: defaultModeColor,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setWorkMin: (state, action: PayloadAction<string>) => {
      state.workMin = action.payload;
      state.totalSec = parseInt(action.payload) * 60;
      state.stepDeg = 360 / (parseInt(action.payload) * 60);
    },
    setRestMin: (state, action: PayloadAction<string>) => {
      state.restMin = action.payload;
      state.totalSec = parseInt(action.payload) * 60;
      state.stepDeg = 360 / (parseInt(action.payload) * 60);
    },
    setLongRestMin: (state, action: PayloadAction<string>) => {
      state.longRestMin = action.payload;
      state.totalSec = parseInt(action.payload) * 60;
      state.stepDeg = 360 / (parseInt(action.payload) * 60);
    },
    addSecond: (state) => {
      state.currentSec++;
    },
    workMode: (state) => {
      state.totalSec = parseInt(state.workMin) * 60;
      state.stepDeg = 360 / (parseInt(state.workMin) * 60);
      state.mode = 1;
      state.currentSec = 0;
    },
    restMode: (state) => {
      state.totalSec = parseInt(state.restMin) * 60;
      state.stepDeg = 360 / (parseInt(state.restMin) * 60);
      state.mode = 2;
      state.currentSec = 0;
    },
    longRestMode: (state) => {
      state.totalSec = parseInt(state.longRestMin) * 60;
      state.stepDeg = 360 / (parseInt(state.longRestMin) * 60);
      state.mode = 3;
      state.currentSec = 0;
    },
    inactiveMode: (state) => {
      state.totalSec = parseInt(state.workMin) * 60;
      state.stepDeg = 360 / (parseInt(state.workMin) * 60);
      state.mode = 0;
      state.currentSec = 0;
    },
    startInactive: (state) => {
      state.text = "START";
      state.borderColor = "#0D58CA";
      state.workModeColor = defaultModeColor;
      state.restModeColor = defaultModeColor;
      state.longRestModeColor = defaultModeColor;
    },
    startWork: (state) => {
      state.text = "STOP";
      state.borderColor = workModeColor;
      state.workModeColor = workModeColor;
      state.restModeColor = defaultModeColor;
      state.longRestModeColor = defaultModeColor;
    },
    startRest: (state) => {
      state.text = "SKIP";
      state.borderColor = restModeColor;
      state.workModeColor = defaultModeColor;
      state.restModeColor = restModeColor;
      state.longRestModeColor = defaultModeColor;
    },
    startLongRest: (state) => {
      state.text = "SKIP";
      state.borderColor = longRestModeColor;
      state.workModeColor = defaultModeColor;
      state.restModeColor = defaultModeColor;
      state.longRestModeColor = longRestModeColor;
    },
  },
});

export const {
  setWorkMin,
  setRestMin,
  setLongRestMin,
  addSecond,
  workMode,
  restMode,
  longRestMode,
  inactiveMode,
  startInactive,
  startWork,
  startRest,
  startLongRest,
} = timerSlice.actions;

export default timerSlice.reducer;
