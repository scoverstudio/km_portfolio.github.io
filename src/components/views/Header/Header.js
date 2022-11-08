import { Container } from "react-bootstrap";
import styles from "./Header.module.scss";
import clsx from "clsx";
import Atropos from "atropos/react";

const Header = () => {
  return (
    <Container
      fluid="lg"
      className={clsx(
        "px-0 d-flex flex-column flex-md-row",
        styles.headerContainer
      )}
    >
      <section className={clsx("pt-4", styles.headerText)}>
        <h1>Hello!</h1>
        <p className="responsive-font-example">
          I'm <span>Krystian Matkowski</span>
        </p>
        <p className={styles.prof}>full stack web developer</p>
        <p className={styles.tools}>&lt;p&gt; react / node.js &lt;/p&gt;</p>
      </section>
      <Atropos shadow={false} highlight={false} rotateXMax={25} rotateYMax={25}>
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
      </Atropos>
    </Container>
  );
};

export default Header;
