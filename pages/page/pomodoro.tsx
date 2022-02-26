import { Website } from "components/layouts";
import RestPromp from "components/pomodoro/rest-promp";
import Settings from "components/pomodoro/settings";
import Timer from "components/pomodoro/timer";
import VoidPromp from "components/pomodoro/void-promp";
import React, { useEffect, useRef, useState } from "react";
import { clearInterval, setInterval } from "timers";
import Info from "components/pomodoro/info";

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

  const [displayRest, setDisplayRest] = useState("none");
  const [displayVoid, setDisplayVoid] = useState("none");
  const [displayTimer, setDisplayTimer] = useState("flex");
  const [displaySettingsIcon, setDisplaySettingsIcon] =
    useState("inline-block");
  const [showInfo, setInfo] = useState("hidden");

  const timer = useRef<NodeJS.Timer>(null);
  useEffect(() => {
    setTotal(parseInt(workMin) * 60);
    setMin(workMin);
  }, [workMin]);

  useEffect(() => {
    setDeg(360 / totalSeconds);
  }, [totalSeconds]);

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

  const showVoid = () => {
    setDisplayVoid("none");
  };

  const infoClick = () => {
    setInfo("grid");
  };

  const infoClose = () => {
    setInfo("hidden");
  };

  return (
    <Website
      title="Pomodoro App"
      description="Simple time tracker app based on the pomodoro technic"
    >
      <RestPromp
        restClick={restClick}
        skipClick={skipClick}
        displayRest={displayRest}
      />
      <VoidPromp
        displayVoid={displayVoid}
        voidClick={voidClick}
        showVoid={showVoid}
      />
      <Info showInfo={showInfo} infoClose={infoClose} />
      <div className="flex flex-col justify-center items-center py-4 min-h-screen text-white bg-dark-red-main-2">
        <div className="aspect-square w-11/12 bg-blue-900 rounded-2xl max-w-3xl grid place-items-center duration-300 ease-out relative">
          <div className="absolute w-full flex justify-end p-2">
            <button onClick={infoClick}>
              <span
                className="iconify"
                data-icon="ant-design:info-circle-outlined"
                style={{ color: "white" }}
                data-width="40"
                data-height="40"
              />
            </button>
          </div>
          {/* Outer ring */}
          <div
            className="rounded-full w-11/12 aspect-square grid place-items-center shadow-xl"
            style={{
              background: `${style}`,
            }}
          >
            <div className="flex flex-col items-center justify-center gap-6 w-11/12 rounded-full aspect-square bg-gradient-radial from-black-inner to-black-outer shadow-lg">
              <Timer
                displayTimer={displayTimer}
                min={min}
                sec={sec}
                startClick={startClick}
                text={text}
              />
              <Settings
                workMin={workMin}
                setWorkMin={setWorkMin}
                restMin={restMin}
                setRestMin={setRestMin}
                setDisplayTimer={setDisplayTimer}
                displaySettingsIcon={displaySettingsIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </Website>
  );
}
