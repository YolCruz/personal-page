import React from "react";
import { useTimerSelector, useTimerDispatch } from "../store/hooks";
import { selectTimer, updateClock } from "../store/timerSlice";

const shadow =
  "rgba(255, 255, 255, 0.19) 0px 10px 20px, rgba(255, 255, 255, 0.23) 0px 6px 6px";

export default function Modes() {
  const workColor = useTimerSelector((state) => state.timer.workColor);
  const restColor = useTimerSelector((state) => state.timer.restColor);
  const longRestColor = useTimerSelector((state) => state.timer.longRestColor);

  const workCompleted = useTimerSelector((state) => state.timer.workCompleted);
  const restCompleted = useTimerSelector((state) => state.timer.restCompleted);
  const longRestCompleted = useTimerSelector(
    (state) => state.timer.longRestCompleted
  );

  const mode = useTimerSelector((state) => state.timer.selectedTimer);
  const active = useTimerSelector((state) => state.timer.text !== "START");

  const dispatch = useTimerDispatch();

  const work = () => {
    dispatch(selectTimer(1));
    dispatch(updateClock());
  };
  const rest = () => {
    dispatch(selectTimer(2));
    dispatch(updateClock());
  };
  const longRest = () => {
    dispatch(selectTimer(3));
    dispatch(updateClock());
  };

  return (
    <div className="flex justify-center gap-[5px]">
      <button
        className="flex-grow py-[10px] text-lg rounded-md border border-blue-4 font-medium flex justify-center"
        style={{
          backgroundColor: workColor,
          boxShadow: mode === 1 ? shadow : "",
          transition: "box-shadow 0.3s ease",
        }}
        onClick={() => work()}
        disabled={active}
      >
        Work <span className="ml-2 font-bold">{workCompleted}</span>
      </button>
      <button
        className="bg-[#201B1B] flex-grow py-[10px] text-lg rounded-md border border-blue-4 font-medium"
        style={{
          backgroundColor: restColor,
          boxShadow: mode === 2 ? shadow : "",
          transition: "box-shadow 0.3s ease",
        }}
        disabled={active}
        onClick={() => rest()}
      >
        Rest <span className="ml-2 font-bold">{restCompleted}</span>
      </button>
      <button
        className="bg-[#201B1B] flex-grow py-[10px] text-lg rounded-md border border-blue-4 font-medium"
        style={{
          backgroundColor: longRestColor,
          boxShadow: mode === 3 ? shadow : "",
          transition: "box-shadow 0.3s ease",
        }}
        disabled={active}
        onClick={() => longRest()}
      >
        Long Rest <span className="ml-2 font-bold">{longRestCompleted}</span>
      </button>
    </div>
  );
}
