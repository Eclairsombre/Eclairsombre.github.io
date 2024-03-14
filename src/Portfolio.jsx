import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import TextAnimation from "./HelloAnimation";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import "./Portfolio.scss";

import { useState } from "react";

function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`Portfolio ${darkMode ? "dark" : ""}`}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <TextAnimation darkMode={darkMode} />
      <AboutMe darkMode={darkMode} />
      <Footer />
      <Skills darkMode={darkMode} />
      <div id="Projects"></div>
      <Projects darkMode={darkMode} />
    </div>
  );
}

export default Portfolio;
