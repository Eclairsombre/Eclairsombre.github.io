import React, { useState } from "react";
import "./Card.scss";
import { useInView } from "react-intersection-observer";

function Card({ project, darkMode }) {
  const [isFlipped, setFlipped] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  const getBackgroundColor = (language) => {
    switch (language) {
      case "JavaScript":
        return "yellow";
      case "Python":
        return "blue";
      case "Java":
        return "red";
      case "React":
        return "lightblue";
      case "HTML":
        return "orange";
      case "CSS":
        return "darkblue";
      case "SCSS":
        return "darkblue";
      case "C++":
        return "grey";
      default:
        return "green";
    }
  };

  const getTextColor = (language) => {
    switch (language) {
      case "JavaScript":
      case "HTML":
      case "React":
        return "black";
      default:
        return "white";
    }
  };
  return (
    <div
      ref={ref}
      className={`flip-card ${darkMode ? "dark" : ""} animated-element ${
        inView ? "animate" : ""
      } ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="flip-card-inner">
        <div
          className="flip-card-front"
          style={{ backgroundImage: `url(${project.img})` }}
        >
          <p></p>
          <div className="TitleBox">
            <h2 className="ProjectTitle">{project.name}</h2>
            <div className="LanguageBox">
              {project.language_used.map((element) => (
                <div
                  className="LanguageUsed"
                  style={{
                    backgroundColor: getBackgroundColor(element),
                    color: getTextColor(element),
                  }}
                >
                  {element}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>Statut : {project.statut}</p>
          <div className="LinkBox">
            <p>
              Github :{" "}
              <a
                className={darkMode ? "darkLink" : ""}
                href={project.link.github}
                target="_blank"
                rel="noreferrer"
                onClick={handleLinkClick}
              >
                {project.link.github}
              </a>
            </p>
            {project.link.website && (
              <div>
                <p>
                  Website :{" "}
                  <a
                    href={project.link.website}
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleLinkClick}
                  >
                    {project.link.website}
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
