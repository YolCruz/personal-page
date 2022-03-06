import React from "react";
import { useHover, useViewportSize } from "@mantine/hooks";
import { BsCheckCircleFill, BsTrashFill } from "react-icons/bs";

import anims from "styles/animations.module.scss";
import { usePomodoroDispatch } from "../store/hooks";
import { taskChange, deleteTask } from "../store/tasksSlice";

interface Props {
  text: string;
  id: number;
}

export default function Completed({ text, id }: Props) {
  const dispatch = usePomodoroDispatch();

  const dims = useViewportSize();
  const { hovered, ref } = useHover();

  return (
    <div
      ref={ref}
      className={`flex-grow border border-gray-500 rounded-xl bg-[#464646] p-4 text-left font-medium text-base xs:text-lg flex items-center justify-between gap-3 line-through decoration-gray-100 text-gray-400 opacity-0 ${anims.slideIn}`}
    >
      <div className="flex gap-3 items-center">
        <button
          onClick={() => {
            dispatch(taskChange({ text, id, completed: false, edit: false }));
          }}
        >
          <BsCheckCircleFill color="white" size="1.5rem" />
        </button>
        <p>{text}</p>
      </div>
      {dims.width < 650 ? (
        <div className="flex gap-3">
        <button
          title="Delete"
          onClick={() => {
            dispatch(deleteTask(id));
          }}
        >
          <BsTrashFill color="white" size="1rem" />
        </button>
      </div>
      ) : (
        hovered && (
          <div className="flex gap-2">
          <button
            title="Delete"
            onClick={() => {
              dispatch(deleteTask(id));
            }}
          >
            <BsTrashFill color="white" size="1.2rem" />
          </button>
        </div>
        )
      )}
    </div>
  );
}
