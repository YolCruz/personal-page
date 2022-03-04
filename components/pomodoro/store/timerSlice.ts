import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompletedPomodoros {
  work: number;
  rest: number;
  longRest: number;
}

export interface TimerState {
  workMin: number;
  restMin: number;
  longRestMin: number;
  currentSec: number;
  totalSec: number;
  selectedTimer: number;
  workCompleted: number;
  restCompleted: number;
  longRestCompleted: number;
  autoStart: boolean;
  text: string;
  stepDeg: number;
  borderColor: string;
  workColor: string;
  restColor: string;
  longRestColor: string;
}

const defaultModeColor = "#201B1B";
const workModeColor = "#900D0D";
const restModeColor = "#07691D";
const longRestModeColor = "#077E86";

const initialState: TimerState = {
  workMin: 20,
  restMin: 5,
  longRestMin: 15,
  currentSec: 0,
  totalSec: 1200,
  selectedTimer: 1, // 1 - work, 2 - rest, 3 - Long rest
  workCompleted: 0,
  restCompleted: 0,
  longRestCompleted: 0,
  autoStart: false,
  text: "START",
  stepDeg: 0.3, // 360 / total seconds
  borderColor: "#0D58CA",
  workColor: defaultModeColor,
  restColor: defaultModeColor,
  longRestColor: defaultModeColor,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    addSecond: (state) => {
      state.currentSec++;
    },
    autoStartTimers: (state) => {
      state.autoStart = !state.autoStart;
    },
    updatePomodoros: (state, action: PayloadAction<CompletedPomodoros>) => {
      state.workCompleted = action.payload.work;
      state.restCompleted = action.payload.rest;
      state.longRestCompleted = action.payload.longRest;
    },
    pomodoroCompleted: (state, action: PayloadAction<number>) => {
      switch (action.payload) {
        case 2:
          state.restCompleted++;
          break;
        case 3:
          state.longRestCompleted++;
          break;
        default:
          state.workCompleted++;
          break;
      }
    },
    updateLocalState: (state) => {
      const data: CompletedPomodoros = {
        work: state.workCompleted,
        rest: state.restCompleted,
        longRest: state.longRestCompleted,
      };
      localStorage.setItem("completed-pomodoros", JSON.stringify(data));
    },
    selectTimer: (state, action: PayloadAction<number>) => {
      state.selectedTimer = action.payload;
    },
    selectMode: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case "short":
          state.workMin = 10;
          state.restMin = 2;
          state.longRestMin = 8;
          break;
        case "long":
          state.workMin = 40;
          state.restMin = 8;
          state.longRestMin = 20;
          break;
        case "debug":
          state.workMin = 0.05;
          state.restMin = 0.05;
          state.longRestMin = 0.05;
          break;
        default:
          state.workMin = 20;
          state.restMin = 5;
          state.longRestMin = 15;
          break;
      }
    },
    updateClock: (state) => {
      switch (state.selectedTimer) {
        case 2:
          state.totalSec = state.restMin * 60;
          state.stepDeg = 360 / (state.restMin * 60);
          break;
        case 3:
          state.totalSec = state.longRestMin * 60;
          state.stepDeg = 360 / (state.longRestMin * 60);
          break;
        default:
          state.totalSec = state.workMin * 60;
          state.stepDeg = 360 / (state.workMin * 60);
          break;
      }
      state.currentSec = 0;
    },
    activeTimerColor: (state, action: PayloadAction<number>) => {
      switch (action.payload) {
        case 1:
          state.workColor = workModeColor;
          state.restColor = defaultModeColor;
          state.longRestColor = defaultModeColor;
          break;
        case 2:
          state.workColor = defaultModeColor;
          state.restColor = restModeColor;
          state.longRestColor = defaultModeColor;
          break;
        case 3:
          state.workColor = defaultModeColor;
          state.restColor = defaultModeColor;
          state.longRestColor = longRestModeColor;
          break;
        default:
          state.workColor = defaultModeColor;
          state.restColor = defaultModeColor;
          state.longRestColor = defaultModeColor;
          break;
      }
    },
    buttonStyle: (state, action: PayloadAction<number>) => {
      switch (action.payload) {
        case 1:
          state.text = "STOP";
          state.borderColor = workModeColor;
          break;
        case 2:
          state.text = "SKIP";
          state.borderColor = restModeColor;
          break;
        case 3:
          state.text = "SKIP";
          state.borderColor = longRestModeColor;
          break;
        default:
          state.text = "START";
          state.borderColor = "#0D58CA";
          break;
      }
    },
  },
});

export const {
  addSecond,
  autoStartTimers,
  updatePomodoros,
  updateLocalState,
  pomodoroCompleted,
  selectTimer,
  selectMode,
  updateClock,
  buttonStyle,
  activeTimerColor,
} = timerSlice.actions;

export default timerSlice.reducer;
