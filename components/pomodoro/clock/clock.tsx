import React from "react";
import { useTimerSelector } from "../store/hooks";

export default function Clock() {
  const currentDegrees = useTimerSelector((state) => {
    const deg = state.timer.stepDeg * state.timer.currentSec;
    return `conic-gradient(#0D58CA ${deg}deg,#353940 ${deg}deg)`;
  });
  const { minutes, seconds } = useTimerSelector((state) => {
    const remainingSec = Math.max(
      Math.floor((state.timer.totalSec - state.timer.currentSec) % 60),
      0
    ).toString();
    const remainingMin = Math.max(
      Math.floor((state.timer.totalSec - state.timer.currentSec) / 60),
      0
    ).toString();
    return {
      minutes: remainingMin.length === 2 ? remainingMin : `0${remainingMin}`,
      seconds: remainingSec.length === 2 ? remainingSec : `0${remainingSec}`,
    };
  });

  return (
    <div
      style={{
        background: currentDegrees,
      }}
      className="aspect-square w-full max-w-xl rounded-full flex items-center justify-center"
    >
      <div
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #454545 0%, #040404 100%)",
          width: "calc(100% - 17px)",
        }}
        className="aspect-square rounded-full flex items-center justify-center"
      >
        <p className="text-7xl font-medium">
          {minutes}:{seconds}
        </p>
      </div>
    </div>
  );
}
