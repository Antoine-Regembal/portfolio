import React from "react";

import "./Technologies.css";

const Technologies = ({ technologiesContent, appLogos }) => (
  <div id={technologiesContent.sectionId} className="technologies">
    {technologiesContent.sections.map((section, key) => (
      <div className="technologies__section" key={key}>
        <h2>{section.title}</h2>
        {section.details && <p>{section.details}</p>}
        <ul>
          {section.icons.map((icon, key) => (
            <li
              key={key}
              className="technologies__flip-card"
              style={{ color: icon.color, height: "5em", width: "5em" }}
            >
              <div className="technologies__flip-card-inner">
                <div className="technologies__flip-card-front">
                  {appLogos(icon.title, "5em")}
                </div>
                <div className="technologies__flip-card-back">{icon.label}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Technologies;
