import React from "react";
import { BsCheck, BsTrashFill, BsFillPencilFill } from "react-icons/bs";
import { useHover, useViewportSize } from "@mantine/hooks";
import anims from "styles/animations.module.scss";
import { usePomodoroDispatch } from "../store/hooks";
import { taskChange, deleteTask } from "../store/tasksSlice";

interface Props {
  text: string;
  id: number;
}

export default function Task({ text, id }: Props) {
  const dispatch = usePomodoroDispatch();

  const { hovered, ref } = useHover();
  const { height, width } = useViewportSize();

  return (
    <div
      ref={ref}
      className={`flex-grow border border-gray-500 rounded-xl p-4 text-left font-medium text-base xs:text-lg flex items-center justify-between opacity-0 ${anims.slideIn}`}
    >
      <div className="flex gap-3 items-center">
        <button
          className="border border-white rounded-full active:scale-150 active:border-green-500"
          style={{
            transition: "all 85ms",
          }}
          onClick={() => {
            dispatch(taskChange({ text, id, completed: true, edit: false }));
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
      {width < 650 ? (
        <div className="flex gap-3">
          <button
            title="Edit"
            onClick={() => {
              dispatch(taskChange({ text, id, completed: false, edit: true }));
            }}
          >
            <BsFillPencilFill size="1rem" />
          </button>
          <button
            title="Delete"
            onClick={() => {
              dispatch(deleteTask(id));
            }}
          >
            <BsTrashFill size="1rem" />
          </button>
        </div>
      ) : (
        hovered && (
          <div className="flex gap-2">
            <button
              title="Edit"
              onClick={() => {
                dispatch(
                  taskChange({ text, id, completed: false, edit: true })
                );
              }}
            >
              <BsFillPencilFill size="1.2rem" />
            </button>
            <button
              title="Delete"
              onClick={() => {
                dispatch(deleteTask(id));
              }}
            >
              <BsTrashFill size="1.2rem" />
            </button>
          </div>
        )
      )}
    </div>
  );
}
