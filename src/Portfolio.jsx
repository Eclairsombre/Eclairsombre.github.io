import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import TextAnimation from "./HelloAnimation";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

function Portfolio() {
  return (
    <div>
      <Header />
      <TextAnimation />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default Portfolio;
