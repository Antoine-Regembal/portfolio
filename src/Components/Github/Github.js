import React from "react";
import { FaGithub } from "react-icons/fa";

import "./Github.css";

const Github = ({ githubContent }) => (
  <a
    href={githubContent}
    target="_blank"
    rel="noopener noreferrer"
    className="github app_links"
  >
    <FaGithub size="3em" className="github__logo" />
  </a>
);

export default Github;
