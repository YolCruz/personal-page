import { useInterval, useViewportSize } from "@mantine/hooks";
import React, { useState, useEffect } from "react";
import { BsFillGearFill } from "react-icons/bs";
import { MdRestartAlt } from "react-icons/md";
import Config from "./config";
import { usePomodoroSelector, usePomodoroDispatch } from "../store/hooks";
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
  const text = usePomodoroSelector((state) => state.timer.text);
  const selectedTimer = usePomodoroSelector(
    (state) => state.timer.selectedTimer
  );
  const borderColor = usePomodoroSelector((state) => state.timer.borderColor);
  const currentSec = usePomodoroSelector((state) => state.timer.currentSec);
  const totalSec = usePomodoroSelector((state) => state.timer.totalSec);
  const workCompleted = usePomodoroSelector(
    (state) => state.timer.workCompleted
  );
  const autoStart = usePomodoroSelector((state) => state.timer.autoStart);
  const dispatch = usePomodoroDispatch();

  const interval = useInterval(() => {
    dispatch(addSecond());
  }, 1000);

  const [open, setOpen] = useState(false);

  const { height, width } = useViewportSize();

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
          className="text-xl sm:text-2xl md:text-3xl font-medium py-4 border-2 rounded-xl flex-grow"
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
          {width < 768 ? (
            <BsFillGearFill color="white" size="1.5rem" />
          ) : (
            <BsFillGearFill color="white" size="2rem" />
          )}
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
          {width < 768 ? (
            <MdRestartAlt color="white" size="1.5rem" />
          ) : (
            <MdRestartAlt color="white" size="2rem" />
          )}
        </button>
      </div>
    </>
  );
}
