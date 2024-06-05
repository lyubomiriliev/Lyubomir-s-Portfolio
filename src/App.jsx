import AboutMe from "./components/AboutMe"
import Contacts from "./components/Contacts"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"

const Layout = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Contacts />
    </div>
  )
}

function App() {

  return (
    <Layout />
  )
}

export default App
