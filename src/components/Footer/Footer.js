import styles from "./Footer.module.scss";

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer}>
      &copy; Hyper Bros. Trading Cards, {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
