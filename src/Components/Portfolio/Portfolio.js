import React from "react";

import "./Portfolio.css";
import Home from "../Home";
import Presentation from "../Presentation";
import AppFooter from "../AppFooter";
import Navigation from "../Navigation";

const Portfolio = ({ appContent }) => (
  <div className="portfolio">
    <Home homeContent={appContent.home} />
    <Presentation presentationContent={appContent.presentation} />
    <AppFooter />
    <Navigation navigationContent={appContent.navigation} />
  </div>
);

export default Portfolio;
