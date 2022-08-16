import styles from "./Socials.module.scss";

const Socials = () => {
  return (
    <section className={styles.socialsContainer}>
      <h2>Try to find me on</h2>
      <p>
        Don't be shy and <span>speak up!</span>
      </p>
      <div className={styles.socialLinks}>
        <a href="https://github.com/scoverstudio">
          <i className="fa fa-github" aria-hidden="true" />
        </a>
        <a href="https://www.linkedin.com/in/krystian-matkowski-328878238/">
          <i class="fa fa-linkedin-square" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default Socials;
