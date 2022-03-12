import { configureStore } from "@reduxjs/toolkit";
import { currencyApi } from "./currencyApi";
import currencyReducer from "./currencySlice";

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    [currencyApi.reducerPath]: currencyApi.reducer,
  },

middleware: (middleware) => middleware().concat(currencyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;