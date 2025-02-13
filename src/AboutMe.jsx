import React from "react";
import "./AboutMe.scss";

function AboutMe({ darkMode }) {
  return (
    <div className={`AboutMeBox ${darkMode ? "dark" : ""}`}>
      <h1 className="AboutMeTitle">About Me</h1>
      <p className="AboutMeText">
        I am Alexandre THOUNY, a 20-year-old student currently in my 3rd year at
        Polytech Lyon engineering school and an apprentice at Coexya as a
        Software Developer.
        <br></br>
        My passion for computer science drives me to explore new fields and to
        improve in the areas I am already familiar with.
        <br></br>I am currently looking for a 1-3 month internship.
      </p>
      <br></br>
      <br></br>
    </div>
  );
}

export default AboutMe;
