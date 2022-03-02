import React, { useState, useEffect, useRef } from "react";
import { useTimerSelector, useTimerDispatch } from "../store/hooks";
import { workMode, restMode, longRestMode } from "../store/timerSlice";

const shadow =
  "rgba(255, 255, 255, 0.19) 0px 10px 20px, rgba(255, 255, 255, 0.23) 0px 6px 6px";

export default function Modes() {
  const workColor = useTimerSelector((state) => state.timer.workModeColor);
  const restColor = useTimerSelector((state) => state.timer.restModeColor);
  const longRestColor = useTimerSelector(
    (state) => state.timer.longRestModeColor
  );

  const mode = useTimerSelector((state) => state.timer.mode);
  const active = useTimerSelector((state) => state.timer.text !== "START");

  const dispatch = useTimerDispatch();

  return (
    <div className="flex justify-center gap-[5px]">
      <button
        className="flex-grow py-[10px] text-lg rounded-md border border-blue-4 font-medium"
        style={{
          backgroundColor: workColor,
          boxShadow: mode === 1 ? shadow : "",
          transition: "box-shadow 0.3s ease",
        }}
        onClick={() => dispatch(workMode())}
        disabled={active}
      >
        Work
      </button>
      <button
        className="bg-[#201B1B] flex-grow py-[10px] text-lg rounded-md border border-blue-4 font-medium"
        style={{
          backgroundColor: restColor,
          boxShadow: mode === 2 ? shadow : "",
          transition: "box-shadow 0.3s ease",
        }}
        disabled={active}
        onClick={() => dispatch(restMode())}
      >
        Rest
      </button>
      <button
        className="bg-[#201B1B] flex-grow py-[10px] text-lg rounded-md border border-blue-4 font-medium"
        style={{
          backgroundColor: longRestColor,
          boxShadow: mode === 3 ? shadow : "",
          transition: "box-shadow 0.3s ease",
        }}
        disabled={active}
        onClick={() => dispatch(longRestMode())}
      >
        Long Rest
      </button>
    </div>
  );
}
