import { Button } from "react-bootstrap";
import styles from "./Resume.module.scss";

const Resume = () => {
  return (
    <section className={styles.resumeContainer}>
      <Button>Download CV</Button>
      <div className={styles.resumeImg}>
        <img alt="" src={`${process.env.PUBLIC_URL}/images/myRESUME.png`}></img>
      </div>
      <Button>Download CV</Button>
    </section>
  );
};

export default Resume;
