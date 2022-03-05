import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { usePomodoroDispatch } from "../store/hooks";
import { addingTask } from "../store/tasksSlice";

export default function AddTask() {
  const dispatch = usePomodoroDispatch();
  return (
    <button
      className="flex-grow relative border border-dashed border-gray-500 rounded-xl p-4 text-left font-medium text-lg flex items-center gap-3 hover:bg-gray-800 active:-top-1"
      onClick={() => dispatch(addingTask(true))}
    >
      <span>
        <AiOutlinePlus color="white" size="1.5rem" />
      </span>
      Add a new task
    </button>
  );
}
