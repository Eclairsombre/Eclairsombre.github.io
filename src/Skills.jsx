import React from "react";
import data from "./skills.json";

import "./Skills.scss";

function Skills() {
  return (
    <section id="skills" className="SkillsBox">
      <div className="SkillsHeading">
        <p className="SkillsKicker">Competences</p>
        <h2>Technologies et outils que j'utilise regulierement</h2>
      </div>

      <ul className="SkillsList">
        {data.skills.map((element, index) => (
          <li key={`${element.name}-${index}`}>
            <div
              className="skill"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="skill__meta">
                <p>{element.name}</p>
                <span>{element.level}</span>
              </div>
              <progress
                className="progress-bar"
                value={Number.parseInt(element.level, 10)}
                max="100"
                aria-label={`Niveau ${element.name}`}
              ></progress>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
