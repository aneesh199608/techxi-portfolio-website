import { Navbar } from "./components/sections/Navbar"
import { ThemeProvider } from "@/components/theme-provider"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Services from "./pages/Services"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />        
        </Routes>
      
    </ThemeProvider>
    
  )
}

export default App