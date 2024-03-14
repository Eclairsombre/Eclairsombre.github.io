import React from "react";
import "./AboutMe.scss";

function AboutMe({ darkMode }) {
  return (
    <div className={`AboutMeBox ${darkMode ? "dark" : ""}`}>
      <h1 className="AboutMeTitle">About Me</h1>
      <p className="AboutMeText">
        Je suis Alexandre THOUNY, un étudiant de 19 ans actuellement en prépa
        intégrée à Polytech Lyon.
        <br></br>
        Ma passion pour l'informatique me pousse a découvrir de nouveau domaine
        et à me perfectionner dans les domaines que je connais déjà.
        <br></br>
        Je suis actuellement a la recherche d'un alternance de 3 ans.
      </p>
      <br></br>
      <br></br>
    </div>
  );
}

export default AboutMe;
