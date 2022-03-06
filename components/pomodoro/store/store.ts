import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timerSlice";
import tasksReducer from "./tasksSlice";

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
