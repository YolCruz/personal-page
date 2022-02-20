import React from "react";

interface Props {
  displayTimer: string;
  min: string;
  sec: string;
  startClick: () => void;
  text: string
}

export default function Timer({displayTimer, min, sec, startClick, text}: Props) {
  return (
    <div
      className="flex-col justify-center items-center"
      style={{
        display: `${displayTimer}`,
      }}
    >
      <div className="text-5xl sm:text-7xl">
        <span id="minutes">{min}</span>
        <span id="colon">:</span>
        <span id="seconds">{sec}</span>
      </div>
      <div>
        <button className="text-3xl sm:text-5xl px-4 py-2" onClick={startClick}>
          {text}
        </button>
      </div>
    </div>
  );
}
