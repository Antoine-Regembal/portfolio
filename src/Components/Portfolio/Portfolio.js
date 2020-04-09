import React from "react";

import "./Portfolio.css";
import Home from "../Home";
import Presentation from "../Presentation";
import Technologies from "../Technologies";
import Cursus from "../Cursus";
import AppFooter from "../AppFooter";
import Github from "../Github";
import Navigation from "../Navigation";

const Portfolio = ({ appContent, appCommon, setLanguage }) => (
  <div className="portfolio">
    <Home
      homeContent={appContent.home}
      homeCommon={appCommon.home}
      name={appCommon.name}
      setLanguage={setLanguage}
    />
    <Presentation presentationContent={appContent.presentation} />
    <Technologies technologiesContent={appContent.technologies} />
    <Cursus cursusContent={appContent.cursus} />
    <AppFooter />
    <Github githubContent={appCommon.github} />
    <Navigation appContent={appContent} navIcon={appCommon.navIcon} />
  </div>
);

export default Portfolio;
