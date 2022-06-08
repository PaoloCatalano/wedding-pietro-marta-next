import Link from "next/link";
import { GiLinkedRings } from "react-icons/gi";

const Header = () => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--space-2)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      width: "100%",
    }}
  >
    <Link href="/">
      <a
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        Pietro &amp; Marta
      </a>
    </Link>
    <GiLinkedRings style={{ color: "var(--gold-2)" }} />
  </header>
);

export default Header;
