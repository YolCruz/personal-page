import React from "react";
import PomodoroDesc from "./Cards/pomodoroDescription";

export default function Apps() {
  return (
    <div className="font-numans text-black dark:text-white pt-20 px-4 relative duration-300 ease-out">
      <h1 className="text-3xl">Apps I&apos;ve made:</h1>
      <PomodoroDesc />
    </div>
  );
}
