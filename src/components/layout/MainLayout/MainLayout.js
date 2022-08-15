import Container from "react-bootstrap/Container";
import Header from "../../views/Header/Header";
import clsx from "clsx";
import Navigation from "../../views/Navigation/Navigation";
import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <Container fluid="lg" className={"m-sm-auto"}>
      <Navigation />
      <Header />
      <div className={styles.divs}>
        <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
      </div>
    </Container>
  );
};

export default MainLayout;
