import React from "react";
import { Website } from "components/layouts";
import { Provider } from "react-redux";
import { ActionIcon } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { store } from "components/pomodoro2/store";
import { GoGear } from "react-icons/go";

export default function Pomodoro() {
  return (
    <Website title="Pomodoro">
      <ModalsProvider>
        <Provider store={store}>
          <div>Hello World!</div>
          <ActionIcon variant="hover" title="Settings">
            <GoGear style={{ width: 30, height: 30 }} />
          </ActionIcon>
        </Provider>
      </ModalsProvider>
    </Website>
  );
}
