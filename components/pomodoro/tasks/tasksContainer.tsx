import React from "react"
import AddTask from "./addTask"

export default function TasksContainer() {
  return (
    <div className="flex-grow border-2 border-blue-4 rounded-xl p-5 flex">
      <AddTask />
    </div>
  )
}