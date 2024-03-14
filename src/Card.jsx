import React, { useState } from "react";
import "./Card.scss";
import { useInView } from "react-intersection-observer";

function Card(project) {
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
      className={`flip-card animated-element ${inView ? "animate" : ""} ${
        isFlipped ? "flipped" : ""
      }`}
      onClick={handleClick}
    >
      <div className="flip-card-inner">
        <div
          className="flip-card-front"
          style={{ backgroundImage: `url(${project.props.img})` }}
        >
          <p></p>
          <div className="TitleBox">
            <h2 className="ProjectTitle">{project.props.name}</h2>
            <div className="LanguageBox">
              {project.props.language_used.map((element) => (
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
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Card;
