import { useClickOutside } from "@mantine/hooks";
import { Switch } from "@mantine/core";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import ConfigTimer from "./configTimer";
import { usePomodoroSelector, usePomodoroDispatch } from "../store/hooks";
import { autoStartTimers } from "../store/timerSlice";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Config({ setOpen }: Props) {
  const ref = useClickOutside(() => setOpen(false));
  const [timerConfig, setTimerConfig] = useState(false);
  const autoStart = usePomodoroSelector((state) => state.timer.autoStart);
  const dispatch = usePomodoroDispatch();

  return (
    <div
      ref={ref}
      style={{
        transform: "translateY(-105%)",
      }}
      className={`absolute p-5 right-0 border top-0 bg-[#221E1E] rounded-xl overflow-hidden`}
    >
      <div
        className="flex-col gap-2"
        style={{
          display: timerConfig ? "flex" : "none",
        }}
      >
        <ConfigTimer setTimerConfig={setTimerConfig} />
      </div>
      <div
        className="flex-col gap-3 text-lg top-[28%]"
        style={{
          display: timerConfig ? "none" : "flex",
        }}
      >
        <div className="flex justify-between items-center">
          <p>Mode</p>
          <button className="mr-1" onClick={() => setTimerConfig(true)}>
            <IoIosArrowForward size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-5">
          <p>Auto start timers</p>
          <Switch
            className=""
            aria-label="Auto start timers"
            radius="md"
            checked={autoStart}
            onChange={() => dispatch(autoStartTimers())}
          />
        </div>
      </div>
    </div>
  );
}
