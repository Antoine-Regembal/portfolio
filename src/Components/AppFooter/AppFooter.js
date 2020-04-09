import React from "react";

import "./AppFooter.css";
import { version } from "../../../package.json";

const AppFooter = ({ name }) => (
  <div className="app-footer">
    <span>{name} - </span>
    <span>{version}</span>
  </div>
);

export default AppFooter;
