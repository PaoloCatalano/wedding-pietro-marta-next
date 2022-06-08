import Link from "next/link";
import { GiLinkedRings } from "react-icons/gi";

const Header = () => (
  <header className="navbar">
    <Link href="/">
      <a>Pietro &amp; Marta</a>
    </Link>
    <div className="nav-right">
      <Link href="/gallery">
        <a>Gallery</a>
      </Link>
      <GiLinkedRings style={{ color: "var(--gold-2)" }} />
    </div>
  </header>
);

export default Header;
