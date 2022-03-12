import React from "react"
import Graph from "./graph/graph"

export default function Container() {
  return (
    <div className="w-screen max-w-full h-screen py-5 flex justify-center">
      <Graph />
    </div>
  )
}