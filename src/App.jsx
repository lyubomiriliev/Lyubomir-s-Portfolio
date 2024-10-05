import { useEffect, useState } from "react"
import AboutMe from "./components/AboutMe"
import Contacts from "./components/Contacts"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import TechStack from "./components/TechStack"
import Footer from "./components/Footer"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const Layout = ({ initialSection }) => {

  const [activeSession, setActiveSession] = useState("home");

  const handleSectionClick = (section) => {
    setActiveSession(section);
    const sectionElement = document.getElementById(section);
    const headerHeight = document.querySelector('header')?.offsetHeight || 0

    if(sectionElement) {
      const sectionOffset = sectionElement.offsetTop - headerHeight - 20;
      window.scrollTo({ top: sectionOffset, behavior: "smooth"})
    }
    window.history.replaceState(null, null, `/${section}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const sections = ["home", "about", "projects", "contact"];
      const sectionOffsets = sections.map((section) => ({
        id: section,
        offset: document.getElementById(section).offsetTop - headerHeight - 20,
      }))

      const activeSection = sectionOffsets.find((section, index) => {
        const nextSection = sectionOffsets[index + 1];
        return scrollPosition >= section.offset && (!nextSection || scrollPosition < nextSection.offset);
      });

      if (activeSection && activeSection.id !== activeSession) {
        setActiveSession(activeSection.id);
        window.history.replaceState(null, null, `/${activeSection.id}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [activeSession])

  useEffect(() => {
    const section = initialSection || window.location.pathname.replace("/", "") || "home";
    const sectionElement = document.getElementById(section);
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    if (sectionElement) {
      const sectionOffset = sectionElement.offsetTop - headerHeight - 20;
      window.scrollTo({ top: sectionOffset, behavior: "smooth" });
      setActiveSession(section);
    }
  }, [initialSection])

  return (
    <div>
      <div id="home"></div>
      <Header activeSession={activeSession} onSectionClick={handleSectionClick} />
      <div >
        <Hero />
      </div>
      <div>
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
      <div>
        <Footer />
      </div>
    </div>
  )
}

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout initialSection="home" />,
      children: [
        {
          path: "/about",
          element: <Layout initialSection="about" />
        },
        {
          path: "/projects",
          element: <Layout initialSection="projects" />
        },
        {
          path: "/contact",
          element: <Layout initialSection="contact" />
        },
        {
          path: "/home",
          element: <Layout initialSection="home" />
        },
      ]
    }
  ])

  return <RouterProvider router={router} />

}

export default App
