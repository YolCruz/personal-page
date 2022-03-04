import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function AddTask() {
  return (
    <button className="flex-grow border border-dashed border-gray-500 rounded-xl p-4 text-left font-medium text-lg flex items-center gap-3">
      <span>
        <AiOutlinePlus color="white" size={20} />
      </span>
      Add a new task
    </button>
  );
}
