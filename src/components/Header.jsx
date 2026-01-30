import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>VISHNU GM</div>

        <nav style={styles.nav}>
          <NavLink to="/" style={styles.link}>Home</NavLink>
          <NavLink to="/projects" style={styles.link}>Projects</NavLink>
          <NavLink to="/contact" style={styles.link}>Contact</NavLink>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}

const styles = {
  header: {
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 100,
  background: "rgba(11, 15, 26, 0.75)",   // translucent dark
  backdropFilter: "blur(8px)",            // glass effect
  WebkitBackdropFilter: "blur(8px)",      // Safari support
  borderBottom: "1px solid rgba(255,255,255,0.05)"
 },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "24px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    fontSize: "0.95rem",
    letterSpacing: "1.5px",
    fontWeight: "600",
    color: "#E5E7EB"
  },
  nav: {
    display: "flex",
    gap: "28px"
  },
  link: {
    color: "#E5E7EB",
    textDecoration: "none",
    fontSize: "0.9rem",
    letterSpacing: "0.5px"
  }
}