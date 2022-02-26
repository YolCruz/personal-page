import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className={`bg-blue-2 w-screen h-11 max-w-full flex justify-start items-center px-2`}>
      <nav className={`font-rubik text-green-1 text-2xl`}>
        <Link href="/">
          <a>HOME</a>
        </Link>
      </nav>
    </header>
  );
}
