import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import WhatIDo from './sections/WhatIDo'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-surface-950 text-surface-200 antialiased selection:bg-cyan-500/20 selection:text-cyan-300 transition-colors duration-300">
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <WhatIDo />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
