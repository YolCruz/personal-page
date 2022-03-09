import { createSlice } from "@reduxjs/toolkit";

export interface QuoteState {
  color: string;
}

const initialState: QuoteState = {
  color: "",
};

const randNum = () => {
  return Math.floor(Math.random() * 255);
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    newColor: (state) => {
      let color1 = randNum();
      let color2 = randNum();
      let color3 = randNum();
      while ((color1 + color2 + color3) / 3 > 90) {
        color1 = randNum();
        color2 = randNum();
        color3 = randNum();
      }
      state.color = `rgb(${color1},${color2},${color3})`;
    },
  },
});

export const { newColor } = quoteSlice.actions;

export default quoteSlice.reducer;
