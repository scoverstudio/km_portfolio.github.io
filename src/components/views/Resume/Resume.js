import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Resume.module.scss";

const Resume = () => {
  return (
    <section className={styles.resumeContainer}>
      <Button>
        <Link
          to={`${process.env.PUBLIC_URL}/files/Minimalist-CV-Resume.pdf`}
          target="_blank"
          download
          className={styles.cv}
        >
          Download CV
        </Link>
      </Button>
      <div className={styles.resumeImg}>
        <img
          alt=""
          src={`${process.env.PUBLIC_URL}/images/myRESUMECV.png`}
        ></img>
      </div>
      <Button>
        <Link
          to={`${process.env.PUBLIC_URL}/files/Minimalist-CV-Resume.pdf`}
          target="_blank"
          download
          className={styles.cv}
        >
          Download CV
        </Link>
      </Button>
    </section>
  );
};

export default Resume;
