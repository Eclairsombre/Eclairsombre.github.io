import React from "react";

function ProjectPage({ project }) {
  console.log(project[0]);
  return (
    <div className="project">
      <h2 className="project__name">{project.name}</h2>
      <img src={project.img} alt={project.name} className="project__image" />

      <p className="project__description">{project.description}</p>
      <br />
      <p className="project__language">
        Language used: {project.language_used}
      </p>
      {project.collaborator.length > 0 && (
        <div className="project__collaborators">
          <h3>Collaborators:</h3>
          <ul>
            {project.collaborator.map((collab, index) => (
              <li key={index} className="project__collaborator">
                <a className="linkProject" href={collab.github}>
                  {collab.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <h3>Links :</h3>
      <div className="project__links">
        <a className="linkProject" href={project.link.github}>
          GitHub
        </a>

        {project.link.website && (
          <a className="linkProject" href={project.link.website}>
            Website
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectPage;
