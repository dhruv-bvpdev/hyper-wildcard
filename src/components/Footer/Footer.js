import styles from "./Footer.module.scss";

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()}
      <span>All Rights Reserved</span>
    </footer>
  );
};

export default Footer;
