import React from "react";
import { usePomodoroSelector } from "../store/hooks";
import { useViewportSize } from "@mantine/hooks";

export default function Clock() {
  const currentDegrees = usePomodoroSelector((state) => {
    const deg = state.timer.stepDeg * state.timer.currentSec;
    return `conic-gradient(#0D58CA ${deg}deg,#353940 ${deg}deg)`;
  });

  const { height, width } = useViewportSize();
  const { minutes, seconds } = usePomodoroSelector((state) => {
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
      className={`aspect-square w-full max-w-xl ${
        height < 650 ? "max-h-[21rem]" : ""
      } rounded-full flex items-center justify-center md:self-center`}
    >
      <div
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #454545 0%, #040404 100%)",
          width: "calc(100% - 17px)",
        }}
        className="aspect-square rounded-full flex items-center justify-center"
      >
        <p className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-regular">
          {minutes}:{seconds}
        </p>
      </div>
    </div>
  );
}
