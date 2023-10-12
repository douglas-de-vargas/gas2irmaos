// React Styles.module
import styles from "./Footer.module.css";

// React Icons
import { BiLogoFacebookSquare, BiLogoInstagramAlt } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div id="icons">
          <BiLogoFacebookSquare />
          <BiLogoInstagramAlt />
        </div>
        <span>&copy; 2023 Douglas, fron-end developer.</span>
      </div>
    </footer>
  );
}
