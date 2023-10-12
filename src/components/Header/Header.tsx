// Next Link
import Link from "next/link";

// css modules
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <h2>Gás 2 Irmãos</h2>
        </Link>
        <Link href="/">
        <h2>x</h2>
        </Link>
      </div>
    </header>
  );
}
