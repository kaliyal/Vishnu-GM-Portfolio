import { Routes, Route } from "react-router-dom"
import Menu from "./pages/Menu"
import Projects from "./pages/Projects"
import About from "./pages/About"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}