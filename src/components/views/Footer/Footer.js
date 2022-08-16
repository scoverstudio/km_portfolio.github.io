import clsx from "clsx";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <section className={clsx("container-fluid w-100 flex-column flex-md-row", styles.footer)}>
      <span>
        Build using
        <a href="https://reactjs.org/">
          <img alt="react" src={`${process.env.PUBLIC_URL}/images/react.png`} />
        </a>
      </span>
      <span>
        Copyright <i class="fa fa-copyright" aria-hidden="true" /> 2022 Krystian
        Matkowski
      </span>
      <span className={styles.socialLinks}>
        <a href="https://github.com/scoverstudio">
          <i className="fa fa-github" aria-hidden="true" />
        </a>
        <a href="https://www.linkedin.com/in/krystian-matkowski-328878238/">
          <i class="fa fa-linkedin-square" aria-hidden="true" />
        </a>
      </span>
    </section>
  );
};

export default Footer;
