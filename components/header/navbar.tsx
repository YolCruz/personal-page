import Link from "next/link";

export interface Props {
  visibility: boolean;
}

export default function Navbar(props: Props) {
  return (
    <nav>
      <ul
        id="primary-navigation"
        data-visible={props.visibility}
        className="fixed font-work z-40 flex flex-col items-start text-dark dark:text-white text-2xl m-0 inset-y-0 right-0 left-1/3 py-40 px-8 gap-8 bg-white dark:bg-black bg-opacity-75 dark:bg-opacity-20 backdrop-blur-lg slider sm:relative sm:flex-row sm:items-center sm:gap-10 sm:px-6 sm:py-4 sm:h-min sm:w-min sm:right-0 sm:left-auto sm:mx-0 md:gap-16 lg:gap-20"
      >
        <li>
          <Link href="/">
            <a href="#">
              <span
                aria-hidden="true"
                className="mr-3 font-bold md-min-max:hidden"
              >
                00
              </span>
              home
            </a>
          </Link>
        </li>
        <li>
          <a href="#">
            <span
              aria-hidden="true"
              className="mr-3 font-bold md-min-max:hidden"
            >
              01
            </span>
            contact
          </a>
        </li>
        <li>
          <a href="#">
            <span
              aria-hidden="true"
              className="mr-3 font-bold md-min-max:hidden"
            >
              02
            </span>
            portfolio
          </a>
        </li>
        <li>
          <a href="#">
            <span
              aria-hidden="true"
              className="mr-3 font-bold md-min-max:hidden"
            >
              03
            </span>
            about
          </a>
        </li>
      </ul>
    </nav>
  );
}
