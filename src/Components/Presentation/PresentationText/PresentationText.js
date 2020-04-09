import React from "react";

import "./PresentationText.css";

const PresentationText = ({ presentationContent, name }) => (
  <div className="presentation__container-text">
    <h2>{name}</h2>
    <h2>{presentationContent.title}</h2>
    {presentationContent.paragraphs.map((paragraph, key) => (
      <p key={key}>{paragraph}</p>
    ))}
  </div>
);

export default PresentationText;
