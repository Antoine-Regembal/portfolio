import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./Navigation.css";

const Navigation = ({ navigationContent }) => (
  <div className="navigation">
    <ul className="navigation__list">
      {navigationContent.map((section, key) => (
        <Link
          key={key}
          to={`/#${section.destination}`}
          smooth
          className="app__links"
        >
          <li>{section.label}</li>
        </Link>
      ))}
    </ul>
  </div>
);

export default Navigation;
