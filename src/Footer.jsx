import React from "react";
import "./Footer.scss";

function Footer() {
  const copyToClipboard = () => {
    const discordText = "eclairsombre";
    navigator.clipboard.writeText(discordText);
  };

  return (
    <footer id="contact" className="Footer">
      <div className="Footer__content">
        <p className="Footer__kicker">Contact</p>
        <h2>Parlons de votre prochain projet</h2>
        <p className="Footer__lead">
          Disponible pour echanger sur une mission, un stage ou une
          collaboration technique.
        </p>

        <div className="Footer__actions">
          <button className="Btn" onClick={copyToClipboard}>
            <img
              src="./discord.svg"
              alt="Discord"
              className="svgIcon"
              height="26"
            />
            <span className="texte">Discord: eclairsombre</span>
          </button>

          <button
            className="Btn"
            onClick={() =>
              window.open("https://github.com/Eclairsombre", "_blank")
            }
          >
            <img
              src="./github.svg"
              alt="GitHub"
              className="svgIcon"
              height="26"
            />
            <span className="texte">GitHub</span>
          </button>

          <button
            className="Btn"
            onClick={() =>
              window.open("mailto:alexandre.thny@gmail.com", "_blank")
            }
          >
            <img src="./mail.svg" alt="Email" className="svgIcon" height="26" />
            <span className="texte">Email</span>
          </button>

          <button
            className="Btn"
            onClick={() =>
              window.open(
                "https://linkedin.com/in/alexandre-thouny-281aa8267",
                "_blank",
              )
            }
          >
            <img
              src="./linkedin.svg"
              alt="LinkedIn"
              className="svgIcon"
              height="26"
            />
            <span className="texte">LinkedIn</span>
          </button>

          <button
            className="Btn"
            onClick={() =>
              window.open("./Alexandre_THOUNY_resume.pdf", "_blank")
            }
          >
            <img
              src="./file-regular.svg"
              alt="CV"
              className="svgIcon"
              height="26"
            />
            <span className="texte">CV</span>
          </button>
        </div>

        <p className="Footer__copyright">
          © {new Date().getFullYear()} Alexandre THOUNY
        </p>
      </div>
    </footer>
  );
}

export default Footer;
