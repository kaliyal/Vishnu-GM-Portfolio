import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function Menu() {
  const navigate = useNavigate()

  return (
    <div style={styles.page}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={styles.content}
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
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0B0F1A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    color: "#E5E7EB"
  },
  content: {
    maxWidth: "720px"
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