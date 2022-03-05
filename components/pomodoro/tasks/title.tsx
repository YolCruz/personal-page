import React from "react";
import { usePomodoroSelector } from "../store/hooks";

export default function Title() {
  const completed = usePomodoroSelector(
    (state) => state.tasks.tasks.filter((task) => task.completed).length
  );
  return (
    <div>
      <p className="font-medium text-2xl">
        <span className="font-light mr-1">{completed}</span> Tasks completed
      </p>
    </div>
  );
}
