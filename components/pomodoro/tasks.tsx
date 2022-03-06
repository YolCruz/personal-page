import React, { useEffect } from "react";
import TasksContainer from "./tasks/tasksContainer";
import Title from "./tasks/title";
import { usePomodoroDispatch, usePomodoroSelector } from "./store/hooks";
import {
  updateTasks,
  TasksUpdate,
  updateLocalStorage,
  updateLastIndex,
} from "./store/tasksSlice";

export default function Tasks() {
  const tasks = usePomodoroSelector((state) => state.tasks.tasks);
  const dispatch = usePomodoroDispatch();

  useEffect(() => {
    const data: TasksUpdate = JSON.parse(localStorage.getItem("tasks"));
    if (localStorage["tasks"]) {
      dispatch(updateTasks(data));
    }
  }, []);

  useEffect(() => {
    dispatch(updateLocalStorage());
    dispatch(updateLastIndex());
  }, [tasks]);
  return (
    <div className="flex flex-col gap-3 md:border-l-2 md:border-blue-4 md:px-8 md:pt-10 md:gap-6">
      <Title />
      <TasksContainer />
    </div>
  );
}
