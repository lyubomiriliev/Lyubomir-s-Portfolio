import AboutMe from "./components/AboutMe"
import Contacts from "./components/Contacts"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import TechStack from "./components/TechStack"

const Layout = () => {
  return (
    <div>
      <Header />
      <Hero />
      <TechStack />
      <AboutMe />
      <Projects />
      <Contacts />
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
