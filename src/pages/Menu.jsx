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
        Senior Unity Game Developer with strong expertise in gameplay systems, AR/VR/XR development, and real-time simulations. Experienced in
building and delivering mobile games, immersive training applications, and metaverse platforms using Unity and C#. Proven ability to architect
networked systems, integrate LCMS and REST APIs, manage Unity Addressables, and own end-to-end build and deployment pipelines. Skilled
in developing core gameplay mechanics, implementing custom analytics and user progress tracking, and optimizing performance for mobile
and VR platforms. Adept at collaborating with cross-functional teams, mentoring developers, and delivering scalable, production-ready
applications for global clients.
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
    paddingTop: "120px",
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