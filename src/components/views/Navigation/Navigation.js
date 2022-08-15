import clsx from "clsx";
import styles from "./Navigation.module.scss";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Nav
      className={clsx(
        "pt-3 pb-3 d-flex justify-content-between",
        styles.navigation
      )}
      activeKey="/home"
    >
      <a href="/home" className={styles.logo}>
        KM
      </a>
      <div className="d-flex">
        <Nav.Item className={styles.item}>
          <Nav.Link className={styles.link} href="/home">
            <i className="fa fa-home" aria-hidden="true"></i>
            <span>Home</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={styles.item}>
          <Nav.Link className={styles.link}>
            <i className="fas fa-brain"></i>
            <span>Portfolio</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={styles.item}>
          <Nav.Link className={styles.link}>
            <i className="fas fa-portrait    "></i>
            <span>About</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={styles.item}>
          <Nav.Link className={styles.link}>
            <i className="fas fa-file-contract"></i>
            <span>Resume</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Link>
          <i className="fa fa-github" aria-hidden="true" />
        </Nav.Link>
      </div>
    </Nav>
  );
};

export default Navigation;
