interface Props {
  displayVoid: string;
  voidClick: () => void;
  showVoid: () => void;
}

export default function VoidPromp({
  displayVoid,
  voidClick,
  showVoid
}: Props) {
  
  return (
    <div
      className="w-screen h-screen z-20 fixed bg-black bg-opacity-60 inset-0 duration-300 ease-out place-items-center"
      style={{
        display: `${displayVoid}`,
      }}
    >
      <div className="w-9/12 h-fit py-8 px-6 max-w-2xl bg-red-900 bg-opacity-100 border-2 border-rose-700 shadow-lg shadow-rose-700 duration-300 ease-out">
        <div className="w-fit mb-7">
          <h1 className="text-2xl text-white">
            Are you sure you want to stop?
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <button
            className="text-2xl text-white bg-red-600 px-5 py-3 rounded-sm"
            onClick={voidClick}
          >
            Stop the session
          </button>
          <button
            className="text-2xl text-white bg-red-600 px-5 py-3 rounded-sm"
            onClick={showVoid}
          >
            Nevemind. Continue!
          </button>
        </div>
      </div>
    </div>
  );
}
