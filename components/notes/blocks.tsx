import React, { ReactElement } from "react";

export class inputBlock {
  text: ReactElement;
  constructor() {
    this.text = (
      <input
        placeholder="Input"
        className="bg-inherit text-3xl h-fit focus-visible:outline-none"
      />
    );
  }
}

const a = new inputBlock();
