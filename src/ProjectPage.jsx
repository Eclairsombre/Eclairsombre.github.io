import React from "react";
import "./ProjectPage.scss";

function ProjectPage({ project, setSelectedProject }) {
  console.log(project[0]);
  return (
    <div className="pageProject">
      <button
        className="projectPage__close"
        onClick={() => setSelectedProject([])}
      >
        Back
      </button>
      <h2 className="pageProject__name">{project.name}</h2>
      <img
        src={project.img}
        alt={project.name}
        className="pageProject__image"
      />

      <p className="pageProject__description">{project.description}</p>
      <p className="pageProject__language">Language used :</p>
      <p className="pageProject__language">{project.language_used}</p>
      {project.collaborator.length > 0 && (
        <>
          <p className="pageProject__language">Collaborators :</p>
          <div className="pageProject__collaborators">
            {project.collaborator.map((collab, index) => (
              <a className="linkProject" href={collab.github}>
                {collab.name}
              </a>
            ))}
          </div>
        </>
      )}
      <p className="pageProject__language">See More :</p>
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
