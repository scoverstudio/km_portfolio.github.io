import clsx from "clsx";
import styles from "./Navigation.module.scss";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComputer,
  faHouse,
  faPaperclip,
  faPortrait,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <Nav className={clsx("p-2", styles.navigation)} activeKey="/home">
      <Container className="d-flex justify-content-between">
        <a href="/home" className={styles.logo}>
          KM
        </a>
        <div className="d-flex">
          <Nav.Item className={styles.item}>
            <Nav.Link className={styles.link} href="/home">
              <i class="fa fa-home" aria-hidden="true"></i>
              <span>Home</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.item}>
            <Nav.Link className={styles.link}>
              <i class="fas fa-brain"></i>
              <span>Portfolio</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.item}>
            <Nav.Link className={styles.link}>
              <i class="fas fa-portrait    "></i>
              <span>About</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.item}>
            <Nav.Link className={styles.link}>
              <i class="fas fa-file-contract"></i>
              <span>Resume</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Link>
            <i class="fa fa-github" aria-hidden="true" />
          </Nav.Link>
        </div>
      </Container>
    </Nav>
  );
};

export default Navigation;
