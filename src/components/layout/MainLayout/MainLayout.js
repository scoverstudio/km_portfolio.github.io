import Container from "react-bootstrap/Container";
import Navigation from "../../views/Navigation/Navigation";
// eslint-disable-next-line no-unused-vars
import styles from "./MainLayout.module.scss";
import Footer from "../../views/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <Container className={"m-sm-auto px-5"}>
      <Navigation />
      {children}
      <Footer />
    </Container>
  );
};

export default MainLayout;
