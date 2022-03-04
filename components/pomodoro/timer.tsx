import React, { useEffect } from "react";
import Modes from "./clock/modes";
import Clock from "./clock/clock";
import Buttons from "./clock/buttons";
import { useTimerDispatch } from "./store/hooks";
import { updatePomodoros, CompletedPomodoros } from "./store/timerSlice";

export default function Timer() {
  const dispatch = useTimerDispatch();
  useEffect(() => {
    if (localStorage["completed-pomodoros"]) {
      const data: CompletedPomodoros = JSON.parse(
        localStorage.getItem("completed-pomodoros")
      );
      dispatch(updatePomodoros(data));
    }
  }, []);
  return (
    <div className="flex flex-col gap-9">
      <Modes />
      <Clock />
      <Buttons />
    </div>
  );
}
