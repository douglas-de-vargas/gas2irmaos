// NextJs
import Link from 'next/link'

// React Icons
import { BiLogoFacebookSquare, BiLogoInstagramAlt } from 'react-icons/bi'

// React Styles.module
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.icons}>
          <BiLogoFacebookSquare />
          <BiLogoInstagramAlt />
        </div>
        <span>
          &copy; 2023{' '}
          <Link href="https://github.com/S1NS3RO/" target="_blank" passHref>
            Douglas
          </Link>
          , fron-end developer.
        </span>
      </div>
    </footer>
  )
}
