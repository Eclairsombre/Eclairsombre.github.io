import React from "react";
import data from "./projects.json";
import "./Projects.scss";
import Card from "./Card";

function Projects() {
  return (
    <section id="projects" className="ProjectsBox">
      <div className="ProjectsHeading">
        <p className="ProjectsKicker">Portfolio</p>
        <h2>Projets realises et en cours</h2>
        <p className="ProjectsIntro">
          Une selection de projets en web, logiciel et IA. Chaque carte presente les technologies utilisees et les liens utiles.
        </p>
      </div>

      <div className="ListProject">
        {data.map((element, index) => (
          <Card key={`${element.name}-${index}`} project={element} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
