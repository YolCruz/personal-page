import { useReducer } from "react";

interface State {
  darkTheme: boolean,
  navVisible: boolean
}
export interface Actions {
  type: string
}

const initialState: State = {
  darkTheme: false,
  navVisible: false
}

function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case "changeNavVisible":
      return {
        darkTheme: state.darkTheme,
        navVisible: !state.navVisible
      }
    case "changeTheme":
      return {
        darkTheme: !state.darkTheme,
        navVisible: state.navVisible
      }
    default:
      throw new Error("That action is not defined")
  }
}

export const [state, dispatch] = useReducer(reducer, initialState);

export function updateDocumentClass() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-sheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};