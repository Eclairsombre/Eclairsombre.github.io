import React from "react";
import Header from "./Header";
import Skills from "./Skills";
import Project from "./Projects";
import data from "./projects.json";
import AboutMe from "./AboutMe";
import TextAnimation from "./HelloAnimation";
import Footer from "./Footer";

function PortFolio() {
  return (
    <div>
      <Header />
      <div className="HelloAnimation" id="HelloAnimation">
        <TextAnimation />
      </div>
      <h1 className="About" id="About">
        About Me
      </h1>
      <AboutMe />
      <h1 className="Skills" id="Skills">
        Skills
      </h1>
      <Skills />
      <h1 className="Projects" id="Projects">
        Projects
      </h1>
      <div className="ProjectBox">
        {data.map((element) => (
          <Project {...element} key={element.id} />
        ))}
      </div>
      <div id="Contact">
        <Footer />
      </div>
    </div>
  );
}

export default PortFolio;
