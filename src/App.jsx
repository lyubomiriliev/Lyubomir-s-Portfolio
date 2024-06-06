import AboutMe from "./components/AboutMe"
import Contacts from "./components/Contacts"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import TechStack from "./components/TechStack"

const Layout = () => {
  return (
    <div>
      <div id="top"></div>
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="tech-stack">
        <TechStack />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contacts />
      </div>
    </div>
  )
}

function App() {

  return (
    <>
      <Layout />
    </>
  )
}

export default App
