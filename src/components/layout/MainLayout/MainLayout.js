import Container from "react-bootstrap/Container";
import Header from "../../views/Header/Header";
import Navigation from "../../views/Navigation/Navigation";
// eslint-disable-next-line no-unused-vars
import styles from "./MainLayout.module.scss";
import HomeAbout from "../../views/HomeAbout/HomeAbout";
import Socials from "../../views/Socials/Socials";
import Footer from "../../views/Footer/Footer";

const MainLayout = () => {
  return (
    <Container className={"m-sm-auto px-5"}>
      <Navigation />
      <Header />
      <HomeAbout />
      <Socials />
      <Footer />
    </Container>
  );
};

export default MainLayout;
