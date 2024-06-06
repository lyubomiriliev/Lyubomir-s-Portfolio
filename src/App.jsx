import { useEffect, useState } from "react"
import AboutMe from "./components/AboutMe"
import Contacts from "./components/Contacts"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import TechStack from "./components/TechStack"
import { Events, scrollSpy } from "react-scroll"

const Layout = () => {

  const [activeSession, setActiveSession] = useState("top");

  useEffect(() => {
    Events.scrollEvent.register("begin", function (to) {
      setActiveSession(to);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ["top", "about", "projects", "contact"];
      const sectionOffsets = sections.map((section) => ({
        id: section,
        offset: document.getElementById(section).offsetTop,
      }))

      const activeSection = sectionOffsets.find((section) => scrollPosition >= section.offset && scrollPosition < section.offset + window.innerHeight);

      if (activeSection) {
        setActiveSession(activeSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <div>
      <div id="top"></div>
      <Header activeSession={activeSession} />
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
