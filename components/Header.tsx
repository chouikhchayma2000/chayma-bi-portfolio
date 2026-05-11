import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <nav className="container nav" aria-label="Main navigation">
        <Link href="/" className="logo" aria-label="Chayma Chouikh home">
          <span className="logo-mark">C</span>
          <span>Chayma Chouikh</span>
        </Link>
        <div className="nav-links">
          <Link href="/about">About</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>

        </div>
      </nav>
    </header>
  );
}
