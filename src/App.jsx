import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"

import Menu from "./pages/Menu"
import Projects from "./pages/Projects"
import About from "./pages/About"

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<About />} />
      </Routes>
    </>
  )
}