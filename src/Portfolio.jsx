import React, { useState } from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import TextAnimation from "./HelloAnimation";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import "./Portfolio.scss";

function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`Portfolio ${darkMode ? "theme-dark" : "theme-light"}`}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <main className="portfolio-main">
        <TextAnimation />
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Portfolio;
