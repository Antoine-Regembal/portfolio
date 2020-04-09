import React from "react";

import "./HomeBar.css";

const HomeBar = ({ homeBarContent }) => (
  <div className="home-bar">
    <ul>
      {homeBarContent.languages.map((language, key) => (
        <li key={key}>{language.label}</li>
      ))}
    </ul>
  </div>
);

export default HomeBar;
