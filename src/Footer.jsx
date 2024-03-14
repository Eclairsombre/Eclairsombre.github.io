import React from "react";
import "./Footer.scss";

function Footer() {
  const copyToClipboard = () => {
    const discordText = "eclairsombre";
    navigator.clipboard.writeText(discordText);
  };

  return (
    <footer id="Skills">
      <button class="Btn" onClick={copyToClipboard}>
        <img
          src="./discord.svg"
          alt="Discord logo"
          class="svgIcon"
          height="30px"
        />
        <span class="texte">Discord : eclairsombre</span>
      </button>
      <button
        className="Btn"
        onClick={() => window.open("https://github.com/Eclairsombre", "_blank")}
      >
        <img
          src="./github.svg"
          alt="Github logo"
          class="svgIcon"
          height="30px"
        />
        <span class="texte">Github</span>
      </button>
      <button
        class="Btn"
        onClick={() => window.open("mailto:alexandre.thny@gmail.com", "_blank")}
      >
        <img src="./mail.svg" alt="mail" class="svgIcon" height="30px" />
        <span class="texte">Mail</span>
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
          class="svgIcon"
          height="30px"
        />
        <span class="texte">Linkedin</span>
      </button>
    </footer>
  );
}

export default Footer;
