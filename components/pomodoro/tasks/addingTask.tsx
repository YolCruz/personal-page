import React, { useState, useRef, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useClickOutside } from "@mantine/hooks";
import { usePomodoroDispatch, usePomodoroSelector } from "../store/hooks";
import { addingTask, addTask } from "../store/tasksSlice";
import anims from "styles/animations.module.scss";

export default function AddingTask() {
  const adding = usePomodoroSelector((state) => state.tasks.adding);
  const dispatch = usePomodoroDispatch();

  const [text, setText] = useState("");
  const ref = useClickOutside(() => dispatch(addingTask(false)));

  const textArea = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textArea.current && adding) {
      textArea.current.select();
    }
  }, [adding]);

  return (
    <div
      ref={ref}
      className={`flex-grow border border-gray-500 rounded-xl p-4 text-base xs:text-lg flex flex-col gap-8 opacity-0 ${anims.slideIn}`}
    >
      <TextareaAutosize
        className="bg-transparent outline-none break-all"
        placeholder="Add new task"
        value={text}
        ref={textArea}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyPress={(k) => {
          if (k.key === "Enter") {
            k.preventDefault();
            dispatch(addTask(text));
            setText("");
          }
        }}
      />
      <div className="flex gap-5">
        <button
          className="flex-grow py-2 rounded-lg text-sm xs:text-base bg-blue-700"
          onClick={() => {
            dispatch(addTask(text));
            setText("");
          }}
        >
          Save
        </button>
        <button
          className="flex-grow py-2 rounded-lg text-sm xs:text-base bg-gray-800"
          onClick={() => dispatch(addingTask(false))}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
