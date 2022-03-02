import React from "react";
import { useTimerSelector, useTimerDispatch } from "../store/hooks";
import { setWorkMin, setRestMin, setLongRestMin } from "../store/timerSlice";
import { IoIosArrowBack } from "react-icons/io";
import { AiFillInfoCircle } from "react-icons/ai";

interface Props {
  setTimerConfig: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ConfigTimer({ setTimerConfig }: Props) {
  const workMin = useTimerSelector((state) => state.timer.workMin);
  const restMin = useTimerSelector((state) => state.timer.restMin);
  const longRestMin = useTimerSelector((state) => state.timer.longRestMin);
  const active = useTimerSelector((state) => state.timer.text !== "START");

  const dispatch = useTimerDispatch();

  return (
    <>
      <button className="" onClick={() => setTimerConfig(false)}>
        <IoIosArrowBack size={20} />
      </button>
      <div className="flex justify-between gap-6">
        <div className="flex gap-2">
          <p>Short</p>
          <p className="sr-only">
            10 minutes work, 2 minutes rest and 10 minutes long rest
          </p>
          <AiFillInfoCircle />
        </div>
        <input
          type="radio"
          name="timer"
          disabled={active}
          className="text-white pl-1 py-2 bg-[#464646]"
        ></input>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <p>Normal</p>
          <p className="sr-only">
            20 minutes work, 5 minutes rest and 15 minutes long rest
          </p>
          <AiFillInfoCircle />
        </div>
        <input
          type="radio"
          name="timer"
          value={restMin}
          disabled={active}
          className="text-white pl-1 py-2 bg-[#464646]"
        ></input>
      </div>
      <div className="flex justify-between gap-2">
        <div className="flex gap-2">
          <p>Long</p>
          <p className="sr-only">
            60 minutes work, 10 minutes rest and 20 minutes long rest
          </p>
          <AiFillInfoCircle />
        </div>
        <input
          type="radio"
          name="timer"
          disabled={active}
          className="text-white pl-1 py-2 bg-[#464646]"
        ></input>
      </div>
    </>
  );
}
