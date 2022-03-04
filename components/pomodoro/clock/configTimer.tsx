import React from "react";
import { useTimerSelector, useTimerDispatch } from "../store/hooks";
import { selectMode, updateClock } from "../store/timerSlice";
import { IoIosArrowBack } from "react-icons/io";

interface Props {
  setTimerConfig: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ConfigTimer({ setTimerConfig }: Props) {
  const restMin = useTimerSelector((state) => state.timer.restMin);
  const active = useTimerSelector((state) => state.timer.text !== "START");

  const dispatch = useTimerDispatch();

  const debug = () => {
    dispatch(selectMode("debug"));
    dispatch(updateClock());
  };
  const short = () => {
    dispatch(selectMode("short"));
    dispatch(updateClock());
  };
  const medium = () => {
    dispatch(selectMode("medium"));
    dispatch(updateClock());
  };
  const long = () => {
    dispatch(selectMode("long"));
    dispatch(updateClock());
  };

  return (
    <>
      <button className="mb-2" onClick={() => setTimerConfig(false)}>
        <IoIosArrowBack size={20} />
      </button>
      <div className="flex flex-col gap-5 pl-1">
        <div className="flex gap-3 items-center">
          <input
            type="radio"
            name="timer"
            disabled={active}
            onChange={() => short()}
            defaultChecked={restMin === 2}
            className="text-white w-4 h-4 bg-[#464646]"
          ></input>
          <div className="flex flex-col">
            <p className="text-lg">Short</p>
            <p className="text-sm text-gray-500">10 min - 2 min - 8 min</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <input
            type="radio"
            name="timer"
            disabled={active}
            onChange={() => medium()}
            defaultChecked={restMin === 5}
            className="text-white w-4 h-4 bg-[#464646]"
          ></input>
          <div className="flex flex-col">
            <p className="text-lg">Medium</p>
            <p className="text-sm text-gray-500">20 min - 5 min - 15 min</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <input
            type="radio"
            name="timer"
            disabled={active}
            onChange={() => long()}
            defaultChecked={restMin === 10}
            className="text-white w-4 h-4 bg-[#464646]"
          ></input>
          <div className="flex flex-col">
            <p className="text-lg">Long</p>
            <p className="text-sm text-gray-500">40 min - 8 min - 20 min</p>
          </div>
        </div>
      </div>
    </>
  );
}
