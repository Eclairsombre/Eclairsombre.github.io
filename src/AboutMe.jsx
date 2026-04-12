import "./AboutMe.scss";

function AboutMe() {
  return (
    <section id="about" className="AboutMeBox">
      <div className="AboutMeHeading">
        <p className="AboutMeKicker">A propos</p>
        <h2 className="AboutMeTitle">Profil, parcours et objectifs</h2>
      </div>

      <p className="AboutMeText">
        Je suis Alexandre THOUNY, etudiant en 3e annee a Polytech Lyon et alternant chez Coexya en developpement logiciel. J'aime construire des solutions fiables, documentees et maintenables.
      </p>
      <p className="AboutMeText">
        Mon objectif: livrer des applications utiles avec une vraie attention a l'experience utilisateur, de l'architecture au dernier pixel.
      </p>

      <div className="AboutMeHighlights">
        <article className="HighlightCard">
          <h3>Formation</h3>
          <p>Cycle ingenieur informatique - Polytech Lyon</p>
        </article>
        <article className="HighlightCard">
          <h3>Alternance</h3>
          <p>Software Developer - Coexya</p>
        </article>
        <article className="HighlightCard">
          <h3>Disponibilite</h3>
          <p>Ouvert a un stage de 1 a 3 mois</p>
        </article>
      </div>
    </section>
  );
}

export default AboutMe;
