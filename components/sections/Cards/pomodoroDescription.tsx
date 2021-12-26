import styles from "styles/main_page/Cards.module.scss";
import Link from "next/link";
import Image from "next/image";
import LayoutCards from "components/layoutCards";

export default function PomodoroDesc() {
  return (
    <LayoutCards>
      <div className="aspect-square w-32 bg-gradient-to-br from-gray-700 rounded-lg opacity-75 self-center justify-self-center"></div>
      <div>
        <Link href="/Apps/pomodoro">
          <a className="relative text-2xl text-blue-500 hover:text-blue-400 active:bottom-1">Pomodoro</a>
        </Link>
        <p className="text-lg">Timer to focus on your projects with 25 min work & 5 min rest</p>
      </div>
    </LayoutCards>
  );
}
