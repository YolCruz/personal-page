import React from "react";

interface Props {
  error: string;
  anim: string;
}

export default function ErrorPromp({ error, anim }: Props) {
  return (
    <div
      className={`fixed inset-0 bg-black z-10 py-16 bg-opacity-50 place-items-center max-w-full ${error} opacity-0 ${anim}`}
    >
      <div className="w-screen h-fit text-white">
        <h1 className="text-center text-3xl bg-red-600 py-6 mx-10">
          Something went wrong
        </h1>
      </div>
    </div>
  );
}
