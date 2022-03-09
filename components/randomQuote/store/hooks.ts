import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useQuoteDispatch = () => useDispatch<AppDispatch>();

export const useQuoteSelector: TypedUseSelectorHook<RootState> = useSelector;
