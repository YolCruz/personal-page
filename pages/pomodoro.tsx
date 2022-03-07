import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { Provider } from "react-redux";
import { useInView } from "react-intersection-observer";
import { Website } from "components/layouts";
import { store } from "components/pomodoro/store/store";
import Timer from "components/pomodoro/timer";
import Tasks from "components/pomodoro/tasks";
import styles from "styles/websites/pomodoro.module.scss";
import anims from "styles/animations.module.scss";

export default function Pomodoro() {
  const [ref, inView] = useInView({
    threshold: 1,
  });

  const [anim, setAnim] = useState("");

  useEffect(() => {
    if (inView) {
      setAnim(anims.show);
      console.log("in view");
    } else {
      setAnim("");
    }
  }, [inView]);

  return (
    <Website title="Pomodoro">
      <Provider store={store}>
        <div
          style={{
            background: "linear-gradient(167.94deg, #2D2D2D 0%, #171717 100%)",
          }}
          className={`w-screen max-w-full h-screen max-h-screen overflow-x-hidden overflow-y-auto font-rubik text-white px-11 pt-7 pb-28 flex flex-col gap-14 md:p-0 ${styles.container}`}
        >
          <Timer />
          <Tasks />
          <footer className="mt-28">
            <Link href="/">
              <a
                className={`flex gap-3 items-center opacity-0 ${anims.icon} ${anim}`}
                ref={ref}
              >
                <AiFillHome size="1.5rem" />
                <p className="text-2xl">Back home</p>
              </a>
            </Link>
          </footer>
        </div>
      </Provider>
    </Website>
  );
}
