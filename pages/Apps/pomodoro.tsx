import { LayoutApps } from "components/layouts";
import { clear } from "console";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { clearInterval, setInterval } from "timers";

export default function Pomodoro() {
  const [text, setText] = useState("START");
  const [mode, setMode] = useState("inactive");
  const [workMin, setWorkMin] = useState("00");
  const [restMin, setRestMin] = useState("5");
  const [min, setMin] = useState(workMin);
  const [sec, setSec] = useState("05");
  const [currentSeconds, setCurrent] = useState(0);
  const [totalSeconds, setTotal] = useState(
    parseInt(workMin) * 60 + parseInt(sec)
  );
  const [totalDeg, setDeg] = useState(360 / totalSeconds);
  const [style, setStyle] = useState(`conic-gradient(
    #be0909 ${currentSeconds * (360 / totalSeconds)}deg,
    #2f2f2f ${currentSeconds * (360 / totalSeconds)}deg
  )`);
  const [display, setDisplay] = useState("none")

  const timer = useRef<NodeJS.Timer>();

  //* When the time of 'work' changes, update totalSeconds and totalDeg
  useEffect(() => {
    const newTotal = parseInt(workMin) * 60 + parseInt(sec);
    setTotal(newTotal);
    setDeg(360 / newTotal);
    setMin(workMin);
  }, [workMin]);

  //* Text is for when the timmer is ACTIVE or INACTIVE
  useEffect(() => {
    if (text === "STOP") {
      timer.current = setInterval(() => {
        setCurrent((s) => s + 1);
        console.log("a");
      }, 1000);
    } else {
      if (timer.current) {
        clearInterval(timer.current);
        setMin(workMin);
        setSec("00");
        setCurrent(0);
      }
    }
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [text]);

  // //* Change between WORK and REST
  useEffect(() => {
    if (mode === "work") {
    } else {
    }
  }, [mode]);

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
        #be0909 ${currentSeconds * (360 / totalSeconds)}deg,
        #2f2f2f ${currentSeconds * (360 / totalSeconds)}deg
      )`
    })
    if (currentSeconds === totalSeconds) {
      setText("START");
      setDisplay("block")
    }
  }, [currentSeconds]);

  return (
    <LayoutApps
      title="Pomodoro App"
      description="Simple time tracker app based on the pomodoro technic"
    >
      <div className="aspect-square w-11/12 bg-green-500 max-w-2xl mx-auto grid place-items-center">
        <div
          className="rounded-full w-11/12 aspect-square grid place-items-center shadow-xl"
          style={{
            background: `${style}`,
          }}
        >
          <div className="w-screen h-screen z-50 fixed bg-black bg-opacity-30 inset-0 duration-300 ease-out" style={{
            display: `${display}`
          }} />
          <div className="flex flex-col gap-6 items-center justify-center w-11/12 rounded-full aspect-square bg-cyan-400 shadow-lg">
            <div className="text-6xl">
              <span id="minutes">{min}</span>
              <span id="colon">:</span>
              <span id="seconds">{sec}</span>
            </div>
            <div className="border-2 border-cyan-400 rounded-sm">
              <button
                className="text-3xl px-4 py-2"
                onClick={() => {
                  if (text === "START") {
                    setText("STOP");
                  } else {
                    setText("START");
                  }
                }}
              >
                {text}
              </button>
            </div>
            <div>
              <button className="w-10 aspect-square bg-settings bg-no-repeat bg-cover bg-center">
                <span className="sr-only">Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutApps>
  );
}
