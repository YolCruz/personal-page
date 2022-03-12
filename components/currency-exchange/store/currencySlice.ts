import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QueryParams } from "./currencyApi";

// export interface CurrencyExchange extends QueryParams {
// }

const initialState: QueryParams = {
  functionApi: "FX_WEEKLY",
  from_symbol: "EUR",
  to_symbol: "USD",
  datatype: "json",
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    newParam: (
      state,
      action: PayloadAction<{ param: string; payload: string }>
    ) => {
      switch (action.payload.param) {
        case "functionApi":
          state.functionApi = action.payload.payload;
          break;
        case "from_symbol":
          state.from_symbol = action.payload.payload;
          break;
        case "to_symbol":
          state.to_symbol = action.payload.payload;
          break;
        default:
          state.datatype = action.payload.payload;
          break;
      }
    },
  },
});

export const { newParam } = currencySlice.actions;

export default currencySlice.reducer;
