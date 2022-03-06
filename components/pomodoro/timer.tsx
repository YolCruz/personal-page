import React, { useEffect } from "react";
import Modes from "./clock/modes";
import Clock from "./clock/clock";
import Buttons from "./clock/buttons";
import { usePomodoroDispatch } from "./store/hooks";
import { updatePomodoros, CompletedPomodoros } from "./store/timerSlice";

export default function Timer() {
  const dispatch = usePomodoroDispatch();
  useEffect(() => {
    if (localStorage["completed-pomodoros"]) {
      const data: CompletedPomodoros = JSON.parse(
        localStorage.getItem("completed-pomodoros")
      );
      dispatch(updatePomodoros(data));
    }
  }, [dispatch]);
  return (
    <div className="flex flex-col gap-9 md:self-center md:px-20 xl:px-36">
      <Modes />
      <Clock />
      <Buttons />
    </div>
  );
}
