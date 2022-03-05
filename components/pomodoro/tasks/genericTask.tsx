import React, { useEffect } from "react";
import { BsCheck, BsTrashFill, BsFillPencilFill } from "react-icons/bs";
import anims from "styles/animations.module.scss";
import { usePomodoroDispatch, usePomodoroSelector } from "../store/hooks";
import { taskChange, updateLocalStorage } from "../store/tasksSlice";

interface Props {
  text: string;
  id: number;
}

export default function Task({ text, id }: Props) {
  const tasks = usePomodoroSelector((state) => state.tasks.tasks);
  const dispatch = usePomodoroDispatch();

  useEffect(() => {
    dispatch(updateLocalStorage());
  }, [tasks]);

  return (
    <div
      className={`flex-grow border border-gray-500 rounded-xl p-4 text-left font-medium text-lg flex items-center justify-between opacity-0 ${anims.slideIn}`}
    >
      <div className="flex gap-3 items-center">
        <button
          className="border border-white rounded-full active:scale-150 active:border-green-500"
          style={{
            transition: "all 85ms",
          }}
          onClick={() => {
            dispatch(taskChange({ id, completed: true }));
          }}
        >
          <BsCheck
            size="1.5rem"
            className="opacity-50 hover:opacity-100 [color:white] active:[color:green]"
            style={{
              transition: "all 85ms ease-in",
            }}
          />
        </button>
        <p>{text}</p>
      </div>
      <div className="flex gap-2">
        <button title="Edit">
          <BsFillPencilFill size="1.2rem" />
        </button>
        <button title="Delete">
          <BsTrashFill size="1.2rem" />
        </button>
      </div>
    </div>
  );
}
