import React from "react";
import Image from "next/image";
import styles from "../../styles/main_page/Main.module.scss";

export interface Props {}

export interface State {
  contactVisible: boolean;
}

class Main extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { contactVisible: false };
  }

  changeContactVisibility = () => {
    if (this.state.contactVisible === false) {
      this.setState({ contactVisible: true });
    } else {
      this.setState({ contactVisible: false });
    }
  };
  render() {
    return (
      <div className={styles.main_content}>
        <div className={styles.hero_container}>
          <div className={styles.avatar_wrapper}>
            <div className={styles.avatar}>
              <Image
                src="/Me_Avatar.jpg"
                height={208}
                width={208}
                alt="The developer"
              />
            </div>
          </div>
          <main className={styles.description}>
            <h1>Hi, I&apos;m Yoltic</h1>
            <p>I desing & build websites.</p>
            <p>I like to solve coding problems for fun!</p>
            <div className={styles.contact}>
              <button>Contact Me</button>
              <div className="flex gap-x-16">
                <div className="">
                  <a
                    href="https://www.instagram.com/yoltic.cruz/"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.instagram}
                  >
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
                <div className="github">
                  <a
                    href="https://github.com/YolCruz"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.github}
                  >
                    <span className="sr-only">Github</span>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className={styles.image_extra}>
          <Image
            src="/sunset.svg"
            alt="Mountains and the sky in a sunset"
            width={680}
            height={516}
          />
        </div>
      </div>
    );
  }
}

export default Main;
