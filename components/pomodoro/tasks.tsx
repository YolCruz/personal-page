import React, { useEffect } from "react";
import TasksContainer from "./tasks/tasksContainer";
import Title from "./tasks/title";
import { usePomodoroDispatch } from "./store/hooks";
import { updateTasks, TasksUpdate } from "./store/tasksSlice";

export default function Tasks() {
  const dispatch = usePomodoroDispatch();
  useEffect(() => {
    const data: TasksUpdate = JSON.parse(localStorage.getItem("tasks"));
    if (localStorage["tasks"]) {
      dispatch(updateTasks(data));
    }
  }, []);
  return (
    <div className="flex flex-col gap-3">
      <Title />
      <TasksContainer />
    </div>
  );
}
