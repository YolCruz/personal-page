import React from "react"
import Modes from "./clock/modes"
import Clock from "./clock/clock"
import Buttons from "./clock/buttons"

export default function Timer() {
  return (
    <div className="flex flex-col gap-9">
      <Modes />
      <Clock />
      <Buttons />
    </div>
  )
}