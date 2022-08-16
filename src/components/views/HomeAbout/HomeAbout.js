import { useRef } from "react";
import styles from "./HomeAbout.module.scss";
import clsx from "clsx";

const HomeAbout = () => {
  const myRef = useRef(null);
  const scrollToSection = () => myRef.current.scrollIntoView();

  return (
    <>
      <div className={styles.divs}>
        <i
          className="fa fa-arrow-circle-down"
          aria-hidden="true"
          onClick={scrollToSection}
        ></i>
      </div>
      <div className={clsx("flex-column flex-md-row", styles.aboutContainer)} ref={myRef}>
        <div className={styles.aboutText}>
          <h2>
            Here's something <span>about me!</span>
          </h2>
          <p>
            Self taught programmer, that creates websites on daily basis. Im
            mainly working in <span>React JS and Node.js</span>.
          </p>
          <p>
            I'm always ready to get to know new web technlogies that are
            improving my work. In the future i would like to work in space that
            cooperate with <span>Blockchain and Web 3.0</span>.
          </p>
          <p>
            If you want to know full space of my abilities and technologies that
            i know check out my <span>portfolio</span> and about subpage.
          </p>
        </div>
        <div className={styles.aboutImage}>
          <img
            alt="lazy programmer"
            src={`${process.env.PUBLIC_URL}/images/imgProgrammer.png`}
          ></img>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
