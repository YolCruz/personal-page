import React, { useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import anims from "styles/animations.module.scss";
import { usePomodoroDispatch, usePomodoroSelector } from "../store/hooks";
import { taskChange, updateLocalStorage } from "../store/tasksSlice";

interface Props {
  text: string;
  id: number;
}

export default function Completed({ text, id }: Props) {
  const tasks = usePomodoroSelector((state) => state.tasks.tasks);
  const dispatch = usePomodoroDispatch();

  useEffect(() => {
    dispatch(updateLocalStorage());
  }, [tasks]);
  return (
    <div
      className={`flex-grow border border-gray-500 rounded-xl bg-[#464646] p-4 text-left font-medium text-lg flex items-center gap-3 line-through decoration-gray-100 text-gray-400 opacity-0 ${anims.slideIn}`}
    >
      <button
        onClick={() => {
          dispatch(taskChange({ id, completed: false }));
        }}
      >
        <BsCheckCircleFill color="white" size="1.5rem" />
      </button>
      <p>{text}</p>
    </div>
  );
}
