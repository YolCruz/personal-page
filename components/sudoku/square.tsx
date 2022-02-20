import React from "react";

interface Props {
  number: number;
}

export default function Square({number}: Props) {
  return (
    <button className="border border-white">
      {number}
    </button>
  )
}