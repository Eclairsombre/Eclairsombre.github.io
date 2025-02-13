import React from "react";
import data from "./projects.json";
import "./Projects.scss";
import Card from "./Card";

function Projects({ darkMode }) {
  return (
    <div className={`ProjectsBox ${darkMode ? "dark" : ""}`}>
      <h1>Projects</h1>
      <h2>Here are my completed and ongoing projects:</h2>
      <div className="ListProject">
        {data.map((element) => (
          <Card project={element} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
