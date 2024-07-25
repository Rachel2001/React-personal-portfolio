import React from "react";
import Navbar from "./Navbar/Navbar";
import "./Navbar/Navbar.css";
import Home from "./Home/Home";
import "./Home/Home.css";
import About from "./About/About";
import "./About/About.css";
import Skills from "./Skills/Skills";
import "./Skills/Skills.css";
import Projects from "./Projects/Projects";
import "./Projects/Projects.css";
import Contact from "./Contact/Contact";
import "./Contact/Contact.css";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
