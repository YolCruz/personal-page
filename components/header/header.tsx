import React from "react";
import Navbar from "./navbar";
import styles from "../../styles/main_page/Header.module.scss"

export interface Props {}

export interface State {
  navVisible: boolean
}

class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { navVisible: false }
  }

  changeNavVisibility = () => {
      if (this.state.navVisible === false) {
        this.setState((state) => {
          return { navVisible: true }
        });
      } else {
        this.setState((state) => {
          return { navVisible: false }
        });
      }
  }
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>YC</div>

        <button
          onClick={this.changeNavVisibility}
          aria-controls="primary-navigation"
          aria-expanded={this.state.navVisible}
          className={styles.primary_nav_toggle}
        >
          <span className="sr-only">Menu</span>
        </button>

        <Navbar visibility={this.state.navVisible} />
      </header>
    );
  }
}

export default Header;
