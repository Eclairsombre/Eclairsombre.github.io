import React from "react";
import "./Projects.scss";
import { useState, useEffect } from "react";

function Project({
  name,
  img,
  description,
  language_used,
  collaborator,
  link,
}) {
  const [image, setImage] = useState(null);
  import(img).then((image) => {
    setImage(image.default);
  });
  return (
    <div className="project">
      <h2 className="project__name">{name}</h2>
      <img src={image} alt={name} className="project__image" />

      <p className="project__description">{description}</p>
      <br />
      <p className="project__language">Language used: {language_used}</p>
      {collaborator.length > 0 && (
        <div className="project__collaborators">
          <h3>Collaborators:</h3>
          <ul>
            {collaborator.map((collab, index) => (
              <li key={index} className="project__collaborator">
                <a className="linkProject" href={collab.github}>
                  {collab.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <h3>Links :</h3>
      <div className="project__links">
        <a className="linkProject" href={link.github}>
          GitHub
        </a>

        {link.website && (
          <a className="linkProject" href={link.website}>
            Website
          </a>
        )}
      </div>
    </div>
  );
}
export default Project;
