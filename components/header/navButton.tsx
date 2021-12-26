import { Dispatch, SetStateAction } from "react";

interface Props {
  navVisible: boolean
  changeVisible: Dispatch<SetStateAction<boolean>>
}

export default function NavButton(props: Props) {
  if (props.navVisible) {
    return (
      <button
      type="button"
      onClick={() => props.changeVisible(prevVis => !prevVis)}
      aria-controls="primary-navigation"
      aria-expanded={props.navVisible}
      className="z-50 w-8 aspect-square bg-close dark:bg-close-white sm:hidden"
    >
      <span className="sr-only">Menu</span>
    </button>  
    )
  }
  return (
    <button
      type="button"
      onClick={() => props.changeVisible(prevVis => !prevVis)}
      aria-controls="primary-navigation"
      aria-expanded={props.navVisible}
      className="z-50 w-8 aspect-square bg-hamburger dark:bg-hamburger-white sm:hidden"
    >
      <span className="sr-only">Menu</span>
    </button>
  );
}
