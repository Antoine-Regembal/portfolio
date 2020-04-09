import React from "react";

import "./Cursus.css";
import CursusSteps from "./CursusSteps";

const Cursus = ({ cursusContent }) => (
  <div id={cursusContent.sectionId} className="cursus parallax">
    <CursusSteps cursusContent={cursusContent} />
  </div>
);

export default Cursus;
