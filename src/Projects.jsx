import React from "react";
import "./Projects.scss";
import { useState, useEffect } from "react";

function Project({ setSelectedProject, project }) {
  return (
    <div className="project" onClick={() => setSelectedProject([project])}>
      <h2 className="project__name">{project.name}</h2>
      <img src={project.img} alt={project.name} className="project__image" />
    </div>
  );
}
export default Project;
