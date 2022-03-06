import React, { useState, useRef, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useClickOutside } from "@mantine/hooks";
import { usePomodoroDispatch, usePomodoroSelector } from "../store/hooks";
import { updateLocalStorage, taskChange } from "../store/tasksSlice";
import anims from "styles/animations.module.scss";

interface Props {
  text: string;
  id: number;
}

export default function EditTask({ text, id }: Props) {
  const dispatch = usePomodoroDispatch();

  const ref = useClickOutside(() =>
    dispatch(taskChange({ text, id, completed: false, edit: false }))
  );

  const [newText, setNewText] = useState(text);
  const textArea = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textArea.current) textArea.current.select();
  }, [textArea]);

  return (
    <div
      ref={ref}
      className={`flex-grow border border-gray-500 rounded-xl p-4 text-base xs:text-lg flex flex-col gap-8 opacity-0 ${anims.slideIn}`}
    >
      <TextareaAutosize
        className="bg-transparent outline-none break-all"
        placeholder="Add new task"
        value={newText}
        ref={textArea}
        onChange={(e) => {
          setNewText(e.target.value);
        }}
        onKeyPress={(k) => {
          if (k.key === "Enter") {
            dispatch(
              taskChange({ text: newText, id, completed: false, edit: false })
            );
          }
        }}
      />
      <div className="flex gap-5">
        <button
          className="flex-grow py-2 rounded-lg text-base bg-blue-700"
          onClick={() => {
            dispatch(
              taskChange({ text: newText, id, completed: false, edit: false })
            );
          }}
        >
          Save
        </button>
        <button
          className="flex-grow py-2 rounded-lg text-base bg-gray-800"
          onClick={() =>
            dispatch(taskChange({ text, id, completed: false, edit: false }))
          }
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
