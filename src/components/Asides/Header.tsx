// Next Link
import Link from 'next/link'

// css modules
import styles from './Header.module.css'

//icons
import { HiOutlineShoppingCart } from 'react-icons/hi'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link
            href='/'
            passHref>
            <h2>Gás 2 Irmãos</h2>
          </Link>
            <HiOutlineShoppingCart stroke='white' />
          </div>
      </header>
    </>
  )
}
