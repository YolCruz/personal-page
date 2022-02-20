import React, { useState, useEffect } from "react";

interface Props {
  workMin: string;
  setWorkMin: React.Dispatch<React.SetStateAction<string>>;
  restMin: string;
  setRestMin: React.Dispatch<React.SetStateAction<string>>;
  setDisplayTimer: React.Dispatch<React.SetStateAction<string>>;
  displaySettingsIcon: string;
}

export default function Settings({
  workMin,
  setWorkMin,
  restMin,
  setRestMin,
  setDisplayTimer,
  displaySettingsIcon,
}: Props) {
  const [settings, setSettings] = useState(false);
  const [displaySettings, setDisplaySettings] = useState("none");

  useEffect(() => {
    if (settings) {
      setDisplayTimer("none");
      setDisplaySettings("flex");
    } else {
      setDisplayTimer("flex");
      setDisplaySettings("none");
    }
  }, [settings, setDisplaySettings, setDisplayTimer]);

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
    <>
      <div
        className="flex-col w-fit justify-center gap-4"
        style={{
          display: `${displaySettings}`,
        }}
      >
        <div className="flex justify-between gap-4">
          <p className="text-2xl sm:text-3xl md:text-4xl">Working minutes:</p>
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
          <p className="text-2xl sm:text-3xl md:text-4xl">Resting minutes:</p>
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
    </>
  );
}
