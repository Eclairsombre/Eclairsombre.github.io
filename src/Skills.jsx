import React from "react";
import { useInView } from "react-intersection-observer";
import data from "./skills.json";

import "./Skills.scss";

function Skills({ darkMode }) {
  const refs = data.skills.map(() =>
    useInView({ triggerOnce: true, threshold: 0.5 })
  );

  return (
    <div className={`SkillsBox ${darkMode ? "dark" : ""}`}>
      <h1>Skills</h1>
      <p style={{ padding: "5px" }}>
        Here are some of the skills I have learned and used in my projects:
      </p>
      <ul>
        {data.skills.map((element, index) => (
          <li key={index}>
            <div
              ref={refs[index].ref}
              className={`skill animated-element ${
                refs[index].inView ? "animate" : ""
              }`}
            >
              <p style={{ marginRight: "20px" }}>{element.name}</p>
              <div className={`progress-bar ${darkMode ? "dark" : ""}`}>
                <div
                  className="progress"
                  style={{ width: element.level }}
                ></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
