import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"

function App() {
  
  return (
    <>
      <Navbar />
      <section id="home" >
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills" className="relative z-10" >
        <Skills />
      </section>
      <section id="projects" className="relative scroll-mt-[-8rem] z-0" >
        <Projects />
      </section>
    </>
  )
}

export default App
