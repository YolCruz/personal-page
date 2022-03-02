import React from "react";
import { Website } from "components/layouts";
import { Provider } from "react-redux";
import { store } from "components/pomodoro2/store/store";
import Timer from "components/pomodoro2/timer";

export default function Pomodoro() {
  return (
    <Website title="Pomodoro">
      <Provider store={store}>
        <div
          style={{
            background: "linear-gradient(167.94deg, #2D2D2D 0%, #171717 100%)",
          }}
          className="w-screen h-screen font-rubik text-white px-11 py-7"
        >
          <Timer />
        </div>
      </Provider>
    </Website>
  );
}
