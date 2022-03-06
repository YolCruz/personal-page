import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const usePomodoroDispatch = () => useDispatch<AppDispatch>();

export const usePomodoroSelector: TypedUseSelectorHook<RootState> = useSelector;
