import React from "react";
import data from "./projects.json";
import "./Projects.scss";
import Card from "./Card";

function Projects() {
  return (
    <div className="ProjectsBox">
      <h1>Projects</h1>
      <p>Voici mes projets réalisés et ceux en cours de réalisation :</p>
      <div className="ListProject">
        {data.map((element) => (
          <Card props={element} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
