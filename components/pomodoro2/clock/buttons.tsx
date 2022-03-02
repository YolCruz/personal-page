import { useInterval } from "@mantine/hooks";
import React, { useState } from "react";
import { BsFillGearFill } from "react-icons/bs";
import Config from "./config";
import { useTimerSelector, useTimerDispatch } from "../store/hooks";
import {
  addSecond,
  workMode,
  restMode,
  inactiveMode,
  startWork,
  startRest,
  startInactive,
} from "../store/timerSlice";

export default function Buttons() {
  const text = useTimerSelector((state) => state.timer.text);
  const mode = useTimerSelector((state) => state.timer.mode);
  const borderColor = useTimerSelector((state) => state.timer.borderColor);
  const totalSec = useTimerSelector((state) => state.timer.totalSec);
  const dispatch = useTimerDispatch();
  const interval = useInterval(() => {
    dispatch(addSecond());
  }, 1000);

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex gap-3 relative">
        {open && <Config setOpen={setOpen} />}
        <button
          style={{
            borderColor,
          }}
          className="text-2xl font-medium py-4 border-2 rounded-xl flex-grow"
          onClick={() => {
            switch (mode) {
              case 0:
                interval.start();
                dispatch(workMode());
                dispatch(startWork());
                setTimeout(() => {
                  interval.stop();
                  dispatch(restMode());
                  dispatch(startInactive());
                }, totalSec * 1000);
                break;
              case 1:
                interval.start();
                dispatch(restMode());
                dispatch(startRest());
                setTimeout(() => {
                  interval.stop();
                  dispatch(restMode());
                  dispatch(startInactive());
                }, totalSec * 1000);
                break;
              default:
                interval.stop();
                dispatch(inactiveMode());
                dispatch(startInactive());
                break;
            }
          }}
        >
          {text}
        </button>

        <button
          className="p-4 border-2 border-blue-4 rounded-xl"
          onClick={() => setOpen(true)}
        >
          <BsFillGearFill color="white" size={24} />
        </button>
      </div>
    </>
  );
}
