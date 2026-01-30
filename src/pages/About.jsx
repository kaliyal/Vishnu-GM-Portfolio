export default function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About</h1>
      <p style={styles.text}>
        Senior Unity Game & XR Developer with experience in games,
        AR/VR simulations, metaverse platforms, and real-time systems.
      </p>
    </div>
  )
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0B0F1A",
    color: "#E5E7EB",
    padding: "60px"
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px"
  },
  text: {
    color: "#9CA3AF",
    maxWidth: "600px",
    lineHeight: "1.6"
  }
}