// NextJs
import Link from "next/link";

// React Icons
import { BiLogoFacebookSquare, BiLogoInstagramAlt } from "react-icons/bi";

// React Styles.module
import "@/styles/Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="icons">
          <Link
            href="https://www.facebook.com/supergasbrasdoisirmaos?mibextid=ZbWKwL"
            target="_blank"
            passHref
          >
            <BiLogoFacebookSquare />
          </Link>
          <Link
            href="https://instagram.com/supergasbras.guaiba?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            passHref
          >
            <BiLogoInstagramAlt />
          </Link>
        </div>
        <span>
          &copy; 2023{" "}
          <Link href="https://github.com/S1NS3RO/" target="_blank" passHref>
            Douglas
          </Link>
          , fron-end developer.
        </span>
      </div>
    </footer>
  );
}
