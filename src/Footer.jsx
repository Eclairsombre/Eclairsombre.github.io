import React from "react";
import "./Footer.scss";

function Footer() {
  const copyToClipboard = () => {
    const discordText = "eclairsombre";
    navigator.clipboard.writeText(discordText);
  };

  return (
    <footer id="Skills">
      <button className="Btn" onClick={copyToClipboard}>
        <img
          src="./discord.svg"
          alt="Discord logo"
          className="svgIcon"
          height="30px"
        />
        <span className="texte">Discord : eclairsombre</span>
      </button>
      <button
        className="Btn"
        onClick={() => window.open("https://github.com/Eclairsombre", "_blank")}
      >
        <img
          src="./github.svg"
          alt="Github logo"
          className="svgIcon"
          height="30px"
        />
        <span className="texte">Github</span>
      </button>
      <button
        className="Btn"
        onClick={() => window.open("mailto:alexandre.thny@gmail.com", "_blank")}
      >
        <img src="./mail.svg" alt="mail" className="svgIcon" height="30px" />
        <span className="texte">Email</span>
      </button>
      <button
        className="Btn"
        onClick={() =>
          window.open(
            "https://linkedin.com/in/alexandre-thouny-281aa8267",
            "_blank"
          )
        }
      >
        <img
          src="./linkedin.svg"
          alt="linkedin"
          className="svgIcon"
          height="30px"
        />
        <span className="texte">Linkedin</span>
      </button>
      <button
        className="Btn"
        onClick={() => window.open("./Alexandre_THOUNY_resume.pdf", "_blank")}
      >
        <img
          src="./file-regular.svg"
          alt="cv"
          className="svgIcon"
          height="30px"
        />
        <span className="texte">Resume</span>
      </button>
    </footer>
  );
}

export default Footer;
