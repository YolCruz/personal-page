import { LayoutApps } from "components/layouts";
import React, { useEffect, useRef, useState } from "react";
import { clearInterval, setInterval } from "timers";

export default function Pomodoro() {
  const [text, setText] = useState("START");
  const [mode, setMode] = useState("inactive");
  const [workMin, setWorkMin] = useState("25");
  const [restMin, setRestMin] = useState("05");
  const [min, setMin] = useState(workMin);
  const [sec, setSec] = useState("00");
  const [currentSeconds, setCurrent] = useState(0);
  const [totalSeconds, setTotal] = useState(
    parseInt(workMin) * 60 + parseInt(sec)
  );
  const [totalDeg, setDeg] = useState(360 / totalSeconds);
  const [style, setStyle] = useState(`conic-gradient(
    #be0909 ${currentSeconds * totalDeg}deg,
    #2f2f2f ${currentSeconds * totalDeg}deg
  )`);
  const [settings, setSettings] = useState(false);

  const [displayRest, setDisplayRest] = useState("none");
  const [displayVoid, setDisplayVoid] = useState("none");
  const [displayTimer, setDisplayTimer] = useState("flex");
  const [displaySettings, setDisplaySettings] = useState("none");
  const [displaySettingsIcon, setDisplaySettingsIcon] =
    useState("inline-block");

  const timer = useRef<NodeJS.Timer>();

  //* When the time of 'work' changes, update totalSeconds and totalDeg
  useEffect(() => {
    setTotal(parseInt(workMin) * 60);
    setMin(workMin);
  }, [workMin]);

  useEffect(() => {
    setDeg(360 / totalSeconds);
  }, [totalSeconds]);

  // //* Change between WORK, REST and INACTIVE modes
  useEffect(() => {
    if (mode === "work") {
      timer.current = setInterval(() => {
        setCurrent((s) => s + 1);
      }, 1000);
      setText("STOP");
      setDisplaySettingsIcon("none");
    } else if (mode === "rest") {
      setTotal(parseInt(restMin) * 60);
      setCurrent(0);
      timer.current = setInterval(() => {
        setCurrent((s) => s + 1);
      }, 1000);
      setText("SKIP");
      setDisplaySettingsIcon("none");
    } else if (mode === "inactive") {
      if (timer.current) {
        clearInterval(timer.current);
        setTotal(parseInt(workMin) * 60);
        setCurrent(0);
        setText("START");
        setDisplaySettingsIcon("inline-block");
      }
    }
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [mode, restMin, workMin]);

  useEffect(() => {
    const remainingSec = Math.floor(
      (totalSeconds - currentSeconds) % 60
    ).toString();
    const remainingMin = Math.floor(
      (totalSeconds - currentSeconds) / 60
    ).toString();
    setSec(() => {
      return remainingSec.length === 2 ? remainingSec : `0${remainingSec}`;
    });
    setMin(() => {
      return remainingMin.length === 2 ? remainingMin : `0${remainingMin}`;
    });
    setStyle(() => {
      return `conic-gradient(
        #be0909 ${currentSeconds * totalDeg}deg,
        #1a1a1a ${currentSeconds * totalDeg}deg
      )`;
    });
    if (currentSeconds === totalSeconds) {
      if (timer.current) {
        clearInterval(timer.current);
      }
      setText("START");
      setDisplayRest("grid");
    }
  }, [currentSeconds, totalSeconds, totalDeg]);

  useEffect(() => {
    if (settings) {
      setDisplayTimer("none");
      setDisplaySettings("flex");
    } else {
      setDisplayTimer("flex");
      setDisplaySettings("none");
    }
  }, [settings]);

  const startClick = () => {
    if (mode === "inactive") {
      setMode("work");
    } else if (mode === "rest") {
      setMode("inactive");
    } else if (mode === "work") {
      setDisplayVoid("grid");
    }
  };

  const restClick = () => {
    setDisplayRest("none");
    setMode("rest");
  };

  const skipClick = () => {
    setMode("inactive");
    setDisplayRest("none");
  };

  const voidClick = () => {
    setMode("inactive");
    setDisplayVoid("none");
  };

  const settingsClick = () => {
    setSettings((prev) => !prev);
  };

  const workMinChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setWorkMin(e.target.value);
  };
  const restMinChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRestMin(e.target.value);
  };

  return (
    <LayoutApps
      title="Pomodoro App"
      description="Simple time tracker app based on the pomodoro technic"
    >
      <div className="grid grid-flow-row xl:grid-flow-col xl:grid-cols-2">
        <div className="aspect-square w-11/12 bg-sky-200 dark:bg-blue-900 rounded-2xl max-w-3xl mx-auto grid place-items-center duration-300 ease-out">
          {/* Outer ring */}
          <div
            className="rounded-full w-11/12 aspect-square grid place-items-center shadow-xl"
            style={{
              background: `${style}`,
            }}
          >
            {/* Display for when the work timer ends */}
            <div
              className="w-screen h-screen z-20 fixed bg-black bg-opacity-60 inset-0 duration-300 ease-out place-items-center"
              style={{
                display: `${displayRest}`,
                // display: "grid"
              }}
            >
              <div className="w-9/12 h-fit py-8 px-6 max-w-2xl bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-80 rounded-lg border-2 border-rose-800 shadow-lg shadow-rose-800 duration-300 ease-out">
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
            {/* DIsplay for whren stoping the timer in work mode */}
            <div
              className="w-screen h-screen z-20 fixed bg-black bg-opacity-60 inset-0 duration-300 ease-out place-items-center"
              style={{
                display: `${displayVoid}`,
                // display: "grid",
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
                    onClick={() => {
                      setDisplayVoid("none");
                    }}
                  >
                    Nevemind. Continue!
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 w-11/12 rounded-full aspect-square bg-cyan-400 dark:bg-gradient-radial dark:from-black-inner dark:to-black-outer shadow-lg">
              <div
                className="flex-col justify-center items-center"
                style={{
                  display: `${displayTimer}`,
                }}
              >
                <div className="text-5xl sm:text-7xl">
                  <span id="minutes">{min}</span>
                  <span id="colon">:</span>
                  <span id="seconds">{sec}</span>
                </div>
                <div>
                  <button
                    className="text-3xl sm:text-5xl px-4 py-2"
                    onClick={startClick}
                  >
                    {text}
                  </button>
                </div>
              </div>
              <div
                className="flex-col w-fit justify-center gap-4"
                style={{
                  display: `${displaySettings}`,
                }}
              >
                <div className="flex justify-between gap-4">
                  <p className="text-2xl sm:text-3xl md:text-4xl">
                    Working minutes:
                  </p>
                  <select
                    name="workMinutes"
                    className="text-white text-xl sm:text-2xl md:text-3xl bg-blue-500 pl-1 pr-2 py-1"
                    value={workMin}
                    onChange={workMinChange}
                  >
                    <option value={1}>01</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                    <option value={25}>25</option>
                    <option value={30}>30</option>
                    <option value={60}>60</option>
                  </select>
                </div>
                <div className="flex justify-between">
                  <p className="text-2xl sm:text-3xl md:text-4xl">
                    Resting minutes:
                  </p>
                  <select
                    name="restMinutes"
                    className="text-white text-xl sm:text-2xl md:text-3xl bg-blue-500 pl-1 pr-2 py-1"
                    value={restMin}
                    onChange={restMinChange}
                  >
                    <option value={5}>05</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                  </select>
                </div>
              </div>
              <div
                style={{
                  display: `${displaySettingsIcon}`,
                }}
              >
                <button
                  className="w-10 aspect-square bg-settings bg-no-repeat bg-cover bg-center"
                  onClick={settingsClick}
                >
                  <span className="sr-only">Settings</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 max-w-3xl flex flex-col mt-10 gap-4 bg-sky-200 dark:bg-black dark:bg-opacity-70 mx-auto p-6 xl:p-10 rounded-xl text-left font-open-sans duration-300 ease-out">
          <h1 className="text-3xl sm:text-4xl mb-4">What I learned doing this proyect:</h1>
          <h2 className="text-2xl sm:text-3xl text-red-600 font-bold">React hooks</h2>
          <p className="text-xl sm:text-2xl mb-2">
            While creating the functionality of this application, I learned to
            use React hooks such as{" "}
            <code className="bg-white dark:bg-gray-700 p-1 rounded-lg">
              useState()
            </code>
            ,{" "}
            <code className="bg-white dark:bg-gray-700 p-1 rounded-lg">
              useEffect()
            </code>{" "}
            and{" "}
            <code className="bg-white dark:bg-gray-700 p-1 rounded-lg">
              useRef()
            </code>.
          </p>
          <h2 className="text-2xl sm:text-3xl text-purple-600 font-bold">Conditional rendering of elements</h2>
          <p className="text-xl sm:text-2xl mb-2">There are many elements that only render when certain conditions are met. For example, starting the timer and then trying to stop it will render a screen that asks for a confirmation.</p>
          <h2 className="text-2xl sm:text-3xl text-green-600 font-bold">Handle click events</h2>
          <p className="text-xl sm:text-2xl">All the interactions are done with buttons that change some state when you click them.</p>
        </div>
      </div>
    </LayoutApps>
  );
}
