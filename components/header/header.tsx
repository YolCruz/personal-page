import * as React from "react";
import Navbar from "./navbar";

export interface Props {}

export interface State {
  navVisibility: string
}

class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { navVisibility: "false" }
  }

  changeNavVisibility = () => {
    console.log("Changing...")
      if (this.state.navVisibility === "false") {
        this.setState({ navVisibility: "true" });
      } else {
        this.setState({ navVisibility: "false" });
      }
  }
  render() {
    return (
      <header className="flex items-center justify-between my-0 px-4 py-4">
        <div className="font-extrabold text-5xl text-blue-50">YC</div>

        <button
          onClick={this.changeNavVisibility}
          aria-controls="primary-navigation"
          aria-expanded={this.state.navVisibility === "true"}
          className="primary-navigation-toggle fixed top-8 right-8 z-50 w-8 aspect-square border-0 sm:hidden"
        >
          <span className="visually-hidden">Menu</span>
        </button>

        <Navbar visibility={this.state.navVisibility} />
      </header>
    );
  }
}

export default Header;
