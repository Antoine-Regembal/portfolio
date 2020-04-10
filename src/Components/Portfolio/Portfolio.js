import React from "react";

import "./Portfolio.css";
import Home from "../Home";
import Presentation from "../Presentation";
import Cursus from "../Cursus";
import Technologies from "../Technologies";
import AppFooter from "../AppFooter";
import Github from "../Github";
import Navigation from "../Navigation";

const Portfolio = ({ appContent, appCommon, setLanguage, appLogos }) => (
  <div className="portfolio">
    <Home
      homeContent={appContent.home}
      homeCommon={appCommon.home}
      name={appCommon.name}
      setLanguage={setLanguage}
    />
    <Presentation
      presentationContent={appContent.presentation}
      name={appCommon.name}
    />
    <Cursus cursusContent={appContent.cursus} />
    <Technologies
      technologiesContent={appContent.technologies}
      appLogos={appLogos}
    />
    <AppFooter name={appCommon.name} />
    <Github githubContent={appCommon.github} />
    <Navigation appContent={appContent} navIcon={appCommon.navIcon} />
  </div>
);

export default Portfolio;
