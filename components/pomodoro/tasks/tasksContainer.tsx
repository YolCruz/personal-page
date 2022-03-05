import React from "react";
import AddTask from "./addTask";
import Completed from "./completedTask";
import Task from "./genericTask";
import AddingTask from "./addingTask";
import { usePomodoroSelector } from "../store/hooks";

export default function TasksContainer() {
  const adding = usePomodoroSelector((state) => state.tasks.adding);
  const unCompleted = usePomodoroSelector((state) =>
    state.tasks.tasks.filter((task) => !task.completed)
  );
  const completed = usePomodoroSelector((state) =>
    state.tasks.tasks.filter((task) => task.completed)
  );
  return (
    <div className="flex-grow border-2 border-blue-4 rounded-xl p-5 flex flex-col gap-4">
      {unCompleted
        .sort((a, b) => a.id - b.id)
        .map((task) => (
          <Task text={task.text} id={task.id} key={`uncompleted-${task.id}`} />
        ))}
      {adding && <AddingTask />}
      {completed
        .sort((a, b) => a.id - b.id)
        .map((task) => (
          <Completed text={task.text} id={task.id} key={`completed-${task.id}`} />
        ))}
      <AddTask />
    </div>
  );
}
