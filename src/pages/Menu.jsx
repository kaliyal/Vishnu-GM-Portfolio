import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function Menu() {
  const navigate = useNavigate()

  return (
    <div style={styles.page}>
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={styles.left}
      >
        <h1 style={styles.name}>VISHNU GM</h1>

        <p style={styles.role}>
          Senior Unity Game & XR Developer
        </p>

        <p style={styles.description}>
          I build games, immersive AR/VR experiences, and real-time simulations
          across education, healthcare, and training domains.
        </p>

        <button
          style={styles.button}
          onClick={() => navigate("/projects")}
        >
          VIEW PROJECTS
        </button>
      </motion.div>

      {/* RIGHT BACKGROUND IMAGE */}
      <div style={styles.right}>
        <div style={styles.overlay} />
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    paddingTop: "120px",
    backgroundColor: "#0B0F1A",
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    color: "#E5E7EB"
  },

  left: {
    padding: "80px",
    maxWidth: "720px"
  },

  right: {
    position: "relative",
    backgroundImage: "url('/hero-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to left, rgba(11,15,26,0.9), rgba(11,15,26,0.3))"
  },

  name: {
    fontSize: "3.4rem",
    fontWeight: "600",
    letterSpacing: "1.5px",
    marginBottom: "12px"
  },

  role: {
    fontSize: "1.05rem",
    color: "#9CA3AF",
    marginBottom: "28px"
  },

  description: {
    fontSize: "1.2rem",
    lineHeight: "1.65",
    marginBottom: "48px",
    maxWidth: "640px"
  },

  button: {
    background: "transparent",
    border: "1px solid #E5E7EB",
    color: "#E5E7EB",
    padding: "14px 36px",
    fontSize: "0.95rem",
    letterSpacing: "1px",
    cursor: "pointer"
  }
}