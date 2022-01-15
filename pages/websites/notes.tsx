import { Website } from "components/layouts";
import React, { useState, useEffect, useRef } from "react";
import Header from "components/notes/header";
import { inputBlock } from "components/notes/blocks";

export default function Notes() {
  const inputs = [new inputBlock]
  const inputsElements = inputs.map(el => {
    return <>{el.text}</>
  })
  const handleSubmit = () => {

  }
  return (
    <Website
      title="Note taking app"
      description="Create and save anything you want"
      main={false}
    >
      <Header />
      <main className="bg-palet-2 z-10 text-white pt-12 min-h-screen h-fit">
        <div className="bg-yellow-700 w-screen h-52 flex flex-col justify-end">
          <div className="aspect-square w-20 flex justify-center items-center ml-8 relative -bottom-9">
            <p className="text-6xl">💻</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4 pt-12">
          <input
            placeholder="Note title"
            className="bg-inherit text-3xl h-fit focus-visible:outline-none"
            onSubmit={handleSubmit}
          />
          <>{inputsElements}</>
        </div>
      </main>
    </Website>
  );
}
