import { configureStore } from "@reduxjs/toolkit";
import { quoteApi } from "./quoteAPI";
import quoteReducer from "./quoteSlice";

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
    [quoteApi.reducerPath]: quoteApi.reducer,
  },

  middleware: (middleware) => middleware().concat(quoteApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
