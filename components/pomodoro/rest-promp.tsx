interface Props {
  restClick: () => void;
  skipClick: () => void;
  displayRest: string;
}

export default function RestPromp({
  restClick,
  skipClick,
  displayRest,
}: Props) {
  return (
    <div
      className="w-screen h-screen z-20 fixed bg-black bg-opacity-60 inset-0 duration-300 ease-out place-items-center"
      style={{
        display: `${displayRest}`,
        // display: "grid"
      }}
    >
      <div className="w-9/12 h-fit py-8 px-6 max-w-2xl bg-black bg-opacity-80 rounded-lg border-2 border-rose-800 shadow-lg shadow-rose-800 duration-300 ease-out">
        <div className="w-fit mb-7">
          <h1 className="text-2xl">You can take a break now</h1>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <button
            className="text-2xl text-white bg-sky-500 px-5 py-3 rounded-sm"
            onClick={restClick}
          >
            Break
          </button>
          <button
            className="text-2xl text-white bg-sky-500 px-5 py-3 rounded-sm"
            onClick={skipClick}
          >
            Skip break
          </button>
        </div>
      </div>
    </div>
  );
}
