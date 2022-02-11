import About from "./about";
import styles from "styles/main.module.scss";
import Welcome from "./welcome";
import PortfolioMobile from "./portfolio_mobile";
import Header from "./header"

interface Props {
  websites: {
    date: string;
    title: string;
    id: string;
    description: string;
    descriptionLong: string;
    picture: string;
    alt: string;
  }[];
}

export default function MainPage({ websites }: Props) {
  return (
    <>
      <div
        className={`fixed inset-0 -z-50 ${styles.backImage} bg-blue-1 bg-no-repeat bg-auto bg-right-bottom overflow-hidden`}
      />
      <Header />
      <Welcome />
      <About />
      <PortfolioMobile />
    </>
  );
}
