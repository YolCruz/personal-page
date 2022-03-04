import React from "react"
import TasksContainer from "./tasks/tasksContainer"
import Title from "./tasks/title"

export default function Tasks() {
  return (
    <div className="flex flex-col gap-3">
      <Title />
      <TasksContainer />
    </div>
  )
}