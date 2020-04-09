import React from "react";

import "./Portfolio.css";
import Home from "../Home";
import Presentation from "../Presentation";
import Technologies from "../Technologies";
import Cursus from "../Cursus";
import AppFooter from "../AppFooter";
import Navigation from "../Navigation";

const Portfolio = ({ appContent, setLanguage }) => (
  <div className="portfolio">
    <Home homeContent={appContent.home} setLanguage={setLanguage} />
    <Presentation presentationContent={appContent.presentation} />
    <Technologies technologiesContent={appContent.technologies} />
    <Cursus cursusContent={appContent.cursus} />
    <AppFooter />
    <Navigation appContent={appContent} />
  </div>
);

export default Portfolio;
