import React from "react";
import "./Skills.scss";
import SkillsData from "./skills.json";

function Skills() {
  return (
    <div className="skills">
      <div className="skills__container">
        {SkillsData.map((picture) => (
          <img className="skill" alt={picture.alt} src={picture.src} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
