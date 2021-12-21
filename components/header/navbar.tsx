import styles from "../../styles/main_page/Navbar.module.scss"

export interface Props {
  visibility: boolean;
}

const Navbar = (props: Props) => {
    return (
      <nav>
        <ul
          id="primary-navigation"
          data-visible={props.visibility}
          className={styles.primary_nav_ul}
        >
          <li>
            <a href="#">
              <span aria-hidden="true">00</span>contact
            </a>
          </li>
          <li>
            <a href="#">
              <span aria-hidden="true">01</span>portfolio
            </a>
          </li>
          <li>
            <a href="#">
              <span aria-hidden="true">02</span>about
            </a>
          </li>
        </ul>
      </nav>
    );
  }

export default Navbar;
