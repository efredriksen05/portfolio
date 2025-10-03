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
      <section id="skills" >
        <Skills />
      </section>
      <section id="projects" className="scroll-mt-[-8rem]" >
        <Projects />
      </section>
    </>
  )
}

export default App
