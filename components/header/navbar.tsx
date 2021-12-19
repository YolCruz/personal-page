import * as React from "react";

export interface Props {
  visibility: string;
}

class Navbar extends React.Component<Props, object> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <ul
          id="primary-navigation"
          data-visible={this.props.visibility}
          className="primary-navigation-ul flex fixed z-40 flex-col items-start text-blue-50 text-2xl m-0 inset-y-0 right-0 left-1/3 py-40 px-8 gap-8 translate-x-full duration-300 ease-out sm:p-0 sm:fixed sm:flex-row sm:items-center sm:gap-20 sm:translate-x-0 sm:px-6 sm:py-2 sm:h-min sm:w-min sm:right-0 sm:left-auto sm:mx-0"
        >
          <li className="">
            <a href="#">
              <span aria-hidden="true">00</span>contact
            </a>
          </li>
          <li className="">
            <a href="#">
              <span aria-hidden="true">01</span>portfolio
            </a>
          </li>
          <li className="">
            <a href="#">
              <span aria-hidden="true">02</span>about
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
