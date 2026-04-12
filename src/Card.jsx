import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";

function Card({ project }) {
  const getColor = (language) => {
    switch (language) {
      case "JavaScript":
        return "#f7df1e";
      case "Python":
        return "#4b8bbe";
      case "Java":
        return "#ea2d2e";
      case "React":
        return "#61dafb";
      case "HTML":
        return "#f16529";
      case "CSS":
      case "SCSS":
        return "#2965f1";
      case "C++":
        return "#5f8dd3";
      default:
        return "#0f172a";
    }
  };

  const isInProgress = project.statut.toLowerCase().includes("in");

  return (
    <article className="project-card">
      <div className="project-card__media">
        <img
          src={project.img}
          alt={`Apercu du projet ${project.name}`}
          className="project-card__image"
          loading="lazy"
          decoding="async"
        />
        <div className="project-card__overlay">
          <h3>{project.name}</h3>
          <span
            className={`project-status ${isInProgress ? "in-progress" : "done"}`}
          >
            {project.statut}
          </span>
        </div>
      </div>

      <div className="project-card__body">
        <p>{project.description}</p>

        <div className="LanguageBox">
          {project.language_used.map((element) => (
            <span
              key={`${project.name}-${element}`}
              className="LanguageUsed"
              style={{
                backgroundColor: getColor(element),
                color:
                  getColor(element) === "#f7df1e" ||
                  getColor(element) === "#61dafb"
                    ? "#111"
                    : "#fff",
              }}
            >
              {element}
            </span>
          ))}
        </div>

        <div className="LinkBox">
          {project.link.github && (
            <a
              href={project.link.github}
              target="_blank"
              rel="noreferrer"
              className="card-link card-link--primary"
            >
              Voir le code
            </a>
          )}
          {project.link.website && (
            <a
              href={project.link.website}
              target="_blank"
              rel="noreferrer"
              className="card-link card-link--ghost"
            >
              Voir le site
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

Card.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    language_used: PropTypes.arrayOf(PropTypes.string).isRequired,
    statut: PropTypes.string.isRequired,
    link: PropTypes.shape({
      github: PropTypes.string.isRequired,
      website: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Card;
