import { useInterval } from "@mantine/hooks";
import React, { useState, useEffect } from "react";
import { BsFillGearFill } from "react-icons/bs";
import { MdRestartAlt } from "react-icons/md";
import Config from "./config";
import { useTimerSelector, useTimerDispatch } from "../store/hooks";
import {
  pomodoroCompleted,
  updatePomodoros,
  updateLocalState,
  updateClock,
  addSecond,
  selectTimer,
  activeTimerColor,
  buttonStyle,
} from "../store/timerSlice";

export default function Buttons() {
  const text = useTimerSelector((state) => state.timer.text);
  const selectedTimer = useTimerSelector((state) => state.timer.selectedTimer);
  const borderColor = useTimerSelector((state) => state.timer.borderColor);
  const currentSec = useTimerSelector((state) => state.timer.currentSec);
  const totalSec = useTimerSelector((state) => state.timer.totalSec);
  const workCompleted = useTimerSelector((state) => state.timer.workCompleted);
  const autoStart = useTimerSelector((state) => state.timer.autoStart);
  const dispatch = useTimerDispatch();

  const interval = useInterval(() => {
    dispatch(addSecond());
  }, 1000);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (currentSec === totalSec + 1) {
      dispatch(pomodoroCompleted(selectedTimer));
      dispatch(updateLocalState());

      let newTimer = 1;
      if (selectedTimer === 1) {
        if ((workCompleted + 1) % 4 === 0) {
          newTimer = 3;
        } else {
          newTimer = 2;
        }
      }

      dispatch(selectTimer(newTimer));
      dispatch(updateClock());

      if (autoStart) {
        dispatch(activeTimerColor(newTimer));
        dispatch(buttonStyle(newTimer));
      } else {
        interval.stop();
        dispatch(activeTimerColor(0));
        dispatch(buttonStyle(0));
      }
    }
  }, [currentSec]);

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
            switch (text) {
              case "START":
                interval.start();
                if (selectedTimer === 0) {
                  dispatch(selectTimer(1));
                }
                dispatch(activeTimerColor(selectedTimer));
                dispatch(buttonStyle(selectedTimer));
                break;
              default:
                interval.stop();
                dispatch(updateClock());
                dispatch(activeTimerColor(0));
                dispatch(buttonStyle(0));
                break;
            }
          }}
        >
          {text}
        </button>

        <button
          className="p-4 border-2 border-blue-4 rounded-xl"
          onClick={() => setOpen(true)}
          title="Configuration"
        >
          <BsFillGearFill color="white" size={24} />
        </button>
        <button
          className="p-4 border-2 border-blue-4 rounded-xl"
          onClick={() => {
            dispatch(
              updatePomodoros({
                work: 0,
                rest: 0,
                longRest: 0,
              })
            );
            dispatch(updateLocalState());
          }}
          title="Restart session"
        >
          <MdRestartAlt color="white" size={24} />
        </button>
      </div>
    </>
  );
}
