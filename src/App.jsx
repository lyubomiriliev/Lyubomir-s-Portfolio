import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Services from "./components/Services";
import Timeline from "./components/Timeline";

const Layout = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div>
      <div id="home"></div>
      <Header />
      <div>
        <Hero />
      </div>
      <div id="about">
        <AboutMe
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
      </div>
      <div id="experience">
        <Timeline
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
      </div>
      <div id="services">
        <Services
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contacts
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout initialSection="home" />,
      children: [
        {
          path: "/about",
          element: <Layout initialSection="about" />,
        },
        {
          path: "/experience",
          element: <Layout initialSection="experience" />,
        },
        {
          path: "/services",
          element: <Layout initialSection="services" />,
        },
        {
          path: "/projects",
          element: <Layout initialSection="projects" />,
        },
        {
          path: "/contact",
          element: <Layout initialSection="contact" />,
        },
        {
          path: "/home",
          element: <Layout initialSection="home" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
