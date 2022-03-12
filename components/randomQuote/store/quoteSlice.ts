import { createSlice } from "@reduxjs/toolkit";

export interface QuoteState {
  color: string;
}

const initialState: QuoteState = {
  color: "",
};

const randNum = () => {
  return Math.floor(Math.random() * 90);
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    newColor: (state) => {
      state.color = `rgb(${randNum()},${randNum()},${randNum()})`;
    },
  },
});

export const { newColor } = quoteSlice.actions;

export default quoteSlice.reducer;
