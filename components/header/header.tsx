import { useState } from "react";
import DarkButton from "./darkButton";
import Navbar from "./navbar";
import NavButton from "./navButton";

export default function Header() {
  const [navVisible, changeNavVisible] = useState(false);
  return (
    <header className="fixed z-40 bg-white dark:bg-slate-700 w-screen h-16 my-0 px-4 py-2 text-black dark:text-white duration-300 ease-out">
      <div className="flex items-center justify-between">
        <div className="z-50 font-work font-extrabold text-5xl text-blue-50;">
          YC
        </div>

        <div className="flex items-center gap-4">
          <DarkButton />

          <NavButton navVisible={navVisible} changeVisible={changeNavVisible} />
        </div>
      </div>
      <Navbar visibility={navVisible} />
    </header>
  );
}
