import React from "react";
import { usePomodoroSelector, usePomodoroDispatch } from "../store/hooks";
import { selectMode, updateClock } from "../store/timerSlice";
import { IoIosArrowBack } from "react-icons/io";

interface Props {
  setTimerConfig: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ConfigTimer({ setTimerConfig }: Props) {
  const restMin = usePomodoroSelector((state) => state.timer.restMin);
  const active = usePomodoroSelector((state) => state.timer.text !== "START");

  const dispatch = usePomodoroDispatch();

  // const debug = () => {
  //   dispatch(selectMode("debug"));
  //   dispatch(updateClock());
  // };
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
      <div className="flex xs:mb-2 items-center gap-2 text-lg xs:text-xl">
        <button className="" onClick={() => setTimerConfig(false)}>
          <IoIosArrowBack size="1.3rem" />
        </button>
        <p>Mode</p>
      </div>
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
            <p className="text-base sm:text-lg md:text-xl">Short</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-500">
              10 min - 2 min - 8 min
            </p>
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
            <p className="text-base sm:text-lg md:text-xl">Medium</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-500">
              20 min - 5 min - 15 min
            </p>
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
            <p className="text-base sm:text-lg md:text-xl">Long</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-500">
              40 min - 8 min - 20 min
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
