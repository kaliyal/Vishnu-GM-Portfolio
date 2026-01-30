export default function Projects() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Projects</h1>
      <p style={styles.text}>
        Talmid • Auticare • Airport VR • Traffic Awareness VR
      </p>
    </div>
  )
}

const styles = {
  container: {
    minHeight: "100vh",
    paddingTop: "120px",
    backgroundColor: "#0B0F1A",
    color: "#E5E7EB",
    padding: "60px"
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px"
  },
  text: {
    color: "#9CA3AF"
  }
}