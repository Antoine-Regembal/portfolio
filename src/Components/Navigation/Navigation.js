import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./Navigation.css";

const Navigation = ({ navLinks, appContent }) => (
  <div className="navigation">
    <ul className="navigation__list">
      {navLinks.map((section, key) => (
        <Link key={key} to={`/#${section}`} smooth className="app__links">
          <li>{appContent[section].label}</li>
        </Link>
      ))}
    </ul>
  </div>
);

export default Navigation;
