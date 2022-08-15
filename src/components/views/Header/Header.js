import { Container } from "react-bootstrap";
import styles from "./Header.module.scss";
import clsx from "clsx";

const Header = () => {
  return (
    <Container fluid="lg" className={clsx("", styles.headerContainer)}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <section className={styles.headerText}>
        <h1>Hello!</h1>
        <p className="responsive-font-example">
          I'm <span>Krystian Matkowski</span>
        </p>
        <p className={styles.prof}>full stack web developer</p>
        <p className={styles.tools}>&lt;p&gt; react / node.js &lt;/p&gt;</p>
      </section>
      <section className={styles.photoContainer}>
        <div className={styles.box}>
          <div className={styles.circle}>
            <img
              alt="photoOfMe"
              src={`${process.env.PUBLIC_URL}/images/photo_noBG_me.png`}
            />
          </div>
          <img
            alt="photoOfMe"
            src={`${process.env.PUBLIC_URL}/images/photo_noBG_me.png`}
          />
        </div>
      </section>
    </Container>
  );
};

export default Header;
