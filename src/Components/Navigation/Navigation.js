import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./Navigation.css";
import NavigationIcon from "./NagivationIcon";

const Navigation = ({ navLinks, appContent, navIcon }) => (
  <div className="navigation">
    <ul className="navigation__list">
      {navLinks.map((section, key) => (
        <Link
          key={key}
          to={`/#${section}`}
          smooth
          className="navigation__list-element app__links"
        >
          <NavigationIcon
            navIconLabel={appContent[section].navIcon}
            navIconPoperties={navIcon}
          />
          <li>{appContent[section].label}</li>
        </Link>
      ))}
    </ul>
  </div>
);

export default Navigation;
