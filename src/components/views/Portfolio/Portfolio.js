import clsx from "clsx";
import { useState } from "react";
import { Button, Card, Container, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getFullPortfolio } from "../../../redux/portfolioRedux";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  const portfolio = useSelector(getFullPortfolio);
  const [active, setActive] = useState(0);
  console.log(active);
  return (
    <Container className={clsx("pt-5", styles.portfolioContainer)}>
      <h1>This is my Portfolio!</h1>
      <div className={clsx("", styles.cardsContainer)}>
        {portfolio.map((element, index) => (
          <Card
            key={index}
            className={clsx(
              styles.singleCard,
              active === index ? styles.active : ""
            )}
            onClick={() => setActive(index)}
          >
            <Card.Title className="text-center p-3">
              {element.siteName}
            </Card.Title>
            <Card.Img
              variant="top"
              src={element.imagePath}
              className={styles.siteImage}
            />
            <Card.Body className="p-3">
              <Card.Text className={styles.description}>
                {element.description}
              </Card.Text>
              <ListGroup
                d
                className={styles.itemGroup}
                key={index}
                variant="dark"
              >
                {element.functionalities.map((functionality, index) => (
                  <>
                    <ListGroup.Item className={styles.singleItem}>
                      <i class="fa fa-circle-o" aria-hidden="true"></i>{" "}
                      <div>{functionality}</div>
                    </ListGroup.Item>
                  </>
                ))}
              </ListGroup>
              <div className={styles.skills}>
                {element.technologies.map((technology) => (
                  <span>
                    <div>{technology} </div>
                    <i class="fa fa-circle" aria-hidden="true"></i>
                  </span>
                ))}
              </div>
            </Card.Body>
            <Button className={styles.button}>
              <a href={element.urlSite}>View project</a>
            </Button>
          </Card>
        ))}
      </div>
      <section className={styles.more}>
        <h2>
          For the rest of my <span>Projects </span>click here
        </h2>
        <div className={styles.moreLinks}>
          <a href="https://github.com/scoverstudio">
            <i className="fa fa-github" aria-hidden="true" />
          </a>
        </div>
      </section>
    </Container>
  );
};

export default Portfolio;
