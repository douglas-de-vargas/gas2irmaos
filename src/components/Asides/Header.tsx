// Next Link
import Link from 'next/link'

// css modules
import '@/styles/Header.scss'

//icons
import { HiOutlineShoppingCart } from 'react-icons/hi'

export default function Header() {
  return (
    <>
      <header>
        <div className='header_container'>
          <Link
            href='/'
            passHref>
            <h2>Gás 2 Irmãos</h2>
          </Link>
          <Link
            href='/produtos'
            passHref>
            <HiOutlineShoppingCart stroke='white' />
          </Link>
        </div>
      </header>
    </>
  )
}
