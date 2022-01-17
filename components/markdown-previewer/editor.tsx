import React, { useEffect, useState } from "react";

interface Props {
  text: string;
  handleUpdate: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Editor({ text, handleUpdate }: Props) {
  return (
    <div className="flex justify-center items-center">
      <textarea
        className="px-2 py-1 border-4 rounded-lg border-black shadow-xl focus:outline-none"
        rows={15}
        cols={100}
        placeholder="Enter some text..."
        value={text}
        onInput={handleUpdate}
      />
    </div>
  );
}
