import styles from "styles/main_page/Cards.module.scss";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutCards,
  LayoutCardsContent,
  LayoutCardsImage,
} from "components/layouts";

export default function PomodoroDesc() {
  return (
    <LayoutCards>
      <LayoutCardsImage>{}</LayoutCardsImage>
      <LayoutCardsContent
        url="/Apps/pomodoro"
        title="Pomodoro"
        desc="Timer to focus on your projects with 25 min work & 5 min rest"
      />
    </LayoutCards>
  );
}
