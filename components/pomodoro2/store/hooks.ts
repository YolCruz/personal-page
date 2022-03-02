import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useTimerDispatch = () => useDispatch<AppDispatch>();

export const useTimerSelector: TypedUseSelectorHook<RootState> = useSelector;
