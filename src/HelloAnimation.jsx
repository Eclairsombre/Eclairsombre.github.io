import { TypeAnimation } from "react-type-animation";
import "./HelloAnimation.scss";

const TextAnimation = () => {
  return (
    <section id="top" className="Hero" aria-label="Introduction">
      <div className="Hero__backdrop"></div>
      <div className="Hero__content">
        <p className="Hero__eyebrow">Software Developer Apprentice</p>
        <TypeAnimation
          sequence={[
            "Je construis des experiences web robustes.",
            1800,
            "J'aime transformer des idees en produits utiles.",
            1800,
            "Bienvenue sur mon portfolio.",
            1800,
          ]}
          wrapper="h1"
          speed={40}
          className="HelloAnimation"
          repeat={Infinity}
        />
        <p className="Hero__subtitle">
          Je suis Alexandre THOUNY, etudiant ingenieur a Polytech Lyon et
          alternant chez Coexya. Je conçois des applications web, des outils et
          des experiences interactives qui allient logique, design et
          performance.
        </p>
        <div className="Hero__actions">
          <a href="#projects" className="Hero__button Hero__button--primary">
            Voir mes projets
          </a>
          <a href="#contact" className="Hero__button Hero__button--ghost">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default TextAnimation;
