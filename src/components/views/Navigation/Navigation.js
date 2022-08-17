import clsx from "clsx";
import styles from "./Navigation.module.scss";
import Nav from "react-bootstrap/Nav";
import { useEffect, useState } from "react";
import { Container, Navbar, useAccordionButton } from "react-bootstrap";

const Navigation = () => {
  const [bgNavbar, setBgNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBgNavbar(true);
      } else {
        setBgNavbar(false);
      }
    });
  }, []);

  return (
    <Navbar
      bg="md-dark"
      expand="md"
      className={clsx(
        "p-1 container-fluid navbar navbar-expand-md fixed-top",
        styles.navigation,
        bgNavbar ? styles.bgNavbarBlur : styles.bgNavbarNoBlur
      )}
    >
      <Container className="container-fluid">
        <Navbar.Brand href="/" className={styles.logo}>
          KM
        </Navbar.Brand>
        <Navbar.Toggle
          className="bg-light"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item className={styles.item}>
              <Nav.Link className={styles.link} href="/">
                <i className="fa fa-home" aria-hidden="true"></i>
                <span>Home</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.item}>
              <Nav.Link className={styles.link} href="/portfolio">
                <i className="fas fa-brain"></i>
                <span>Portfolio</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.item}>
              <Nav.Link className={styles.link} href="/about">
                <i className="fas fa-portrait"></i>
                <span>About</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.item}>
              <Nav.Link className={styles.link} href="/resume">
                <i className="fas fa-file-contract"></i>
                <span>Resume</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Link>
              <i className="fa fa-github" aria-hidden="true" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
