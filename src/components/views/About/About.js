import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <h2>
        Range of my <span>abilities</span>
      </h2>

      <div className={styles.skillsContainer}>
        <div className={styles.card}>
          <div className={styles.cover}>
            <span>HTML5</span>
            <div className={styles.cardBack}>
              <i class="fa fa-html5 fa-6x" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cover}>
            <span>CSS3</span>
            <div className={styles.cardBack}>
              <i class="fa fa-css3 fa-6x" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cover}>
            <span>REACT</span>
            <div className={styles.cardBack}>
              <i class="fab fa-react fa-6x fa-fw"></i>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cover}>
            <span>Javascript</span>
            <div className={styles.cardBack}>
              <i class="fab fa-js fa-6x"></i>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cover}>
            <span
              style={{
                width: "80%",
              }}
            >
              JEST, Enzyme
            </span>
            <div className={styles.cardBack}>
              <i class="fa fa-recycle fa-6x" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cover}>
            <span>Node.js</span>
            <div className={styles.cardBack}>
              <i class="fab fa-node fa-6x fa-fw"></i>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cover}>
            <span>Express.js</span>
            <div className={styles.cardBack}></div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cover}>
            <span>MongoDB</span>
            <div className={styles.cardBack}></div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cover}>
            <span>Websockets</span>
            <div className={styles.cardBack}></div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cover}>
            <span>Auth0</span>
            <div className={styles.cardBack}></div>
          </div>
        </div>
      </div>

      <div className={styles.education}>
        <h2>
          Education <span>source</span>
        </h2>
        <div className={styles.imgGroup}>
          <div className={styles.imgContainer}>
            <img
              alt=""
              src={`${process.env.PUBLIC_URL}/images/Udemy_logo.svg.png`}
            />
          </div>
          <div className={styles.imgContainer}>
            <img alt="" src={`${process.env.PUBLIC_URL}/images/logo.png`} />
          </div>
          <div className={styles.imgContainer}>
            <img
              alt=""
              src={`${process.env.PUBLIC_URL}/images/W3Schools_logo.png`}
            />
          </div>
          <div className={styles.imgContainer}>
            <img
              alt=""
              src={`${process.env.PUBLIC_URL}/images/MDN_Web_Docs-Logo.png`}
            />
          </div>
          <div className={styles.imgContainer}>
            <img
              alt=""
              src={`${process.env.PUBLIC_URL}/images/cs50-black.png`}
            />
          </div>
        </div>
      </div>

      <div className={styles.aboutMeContainer}>
        <div className={styles.aboutMeContent}>
          <h2>Know me better</h2>
          <p>
            Hey, my name is <span>Krystian Matkowski</span> and I'm 21. Most of
            my life I was living in Polkowice, but now try to find myself in
            <span> Wrocław</span>. I prefer learning by myself in front of my
            computer.
          </p>
          <p>
            Through my life I got a lot of hobbies and passions, but the one
            that stayed for longer time is coding. Im
            <span> patient and confident </span>
            about what I'm doing and never give up.
          </p>
          <div className={styles.hobbys}>
            <h3>Things that occupy my head outside of programming: </h3>
            <p>
              - Crypto/Forex <i class="fa fa-money" aria-hidden="true"></i>
            </p>
            <p>
              - Stock market <i class="fas fa-chart-area    "></i>
            </p>
            <p>
              - Skateboarding -- that's why I made skateShop site{" "}
              <i class="fas fa-hot-tub    "></i>
            </p>
          </div>
        </div>
        <div className={styles.imgAbout}>
          <img
            alt=""
            src={`${process.env.PUBLIC_URL}/images/aboutMeImg.png`}
          ></img>
        </div>
      </div>
    </section>
  );
};

export default About;
