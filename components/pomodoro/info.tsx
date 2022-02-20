import React from "react";

interface Props {
  showInfo: string;
  infoClose: () => void;
}

export default function Info({ showInfo, infoClose }: Props) {
  return (
    <div
      className={`${showInfo} w-screen h-screen fixed z-20 bg-black bg-opacity-60 place-content-center`}
    >
      <div
        className={`w-11/12 h-fit flex flex-col gap-4 bg-black bg-opacity-80 mx-auto p-6 xl:p-10 rounded-xl text-left font-open-sans text-white relative`}
      >
        <div className="absolute p-2 w-full flex justify-end">
          <button onClick={infoClose}>
            <span
              className="iconify"
              data-icon="ant-design:close-circle-outlined"
              style={{color: "white"}}
              data-width="40"
              data-height="40"
            />
          </button>
        </div>
        <h1 className="text-3xl sm:text-4xl mb-4">
          What I learned doing this proyect:
        </h1>
        <h2 className="text-2xl sm:text-3xl text-red-400 font-bold">
          React hooks
        </h2>
        <p className="text-xl sm:text-2xl mb-2">
          While creating the functionality of this application, I learned to use
          React hooks such as{" "}
          <code className="bg-gray-700 p-1 rounded-lg">useState()</code>,{" "}
          <code className="bg-gray-700 p-1 rounded-lg">useEffect()</code> and{" "}
          <code className="bg-gray-700 p-1 rounded-lg">useRef()</code>.
        </p>
        <h2 className="text-2xl sm:text-3xl text-purple-400 font-bold">
          Conditional rendering of elements
        </h2>
        <p className="text-xl sm:text-2xl mb-2">
          There are many elements that only render when certain conditions are
          met. For example, starting the timer and then trying to stop it will
          render a screen that asks for a confirmation.
        </p>
        <h2 className="text-2xl sm:text-3xl text-green-400 font-bold">
          Handle click events
        </h2>
        <p className="text-xl sm:text-2xl">
          All the interactions are done with buttons that change some state when
          you click them.
        </p>
      </div>
    </div>
  );
}
