import React from "react";
import { Website } from "components/layouts";
import { Provider } from "react-redux";
import { store } from "components/pomodoro/store/store";
import Timer from "components/pomodoro/timer";
import Tasks from "components/pomodoro/tasks";

export default function Pomodoro() {
  return (
    <Website title="Pomodoro">
      <Provider store={store}>
        <div
          style={{
            background: "linear-gradient(167.94deg, #2D2D2D 0%, #171717 100%)",
          }}
          className="w-screen max-w-full h-screen max-h-screen overflow-x-hidden overflow-y-auto font-rubik text-white px-11 py-7 flex flex-col gap-14"
        >
          <Timer />
          <Tasks />
        </div>
      </Provider>
    </Website>
  );
}
