import React from "react";

import "./HomeBar.css";

const HomeBar = ({ homeBarContent, setLanguage }) => (
  <div className="home-bar">
    <ul>
      {homeBarContent.languages.map((language, key) => (
        <li key={key} onClick={() => setLanguage(language.code)}>
          {language.label}
        </li>
      ))}
    </ul>
  </div>
);

export default HomeBar;
