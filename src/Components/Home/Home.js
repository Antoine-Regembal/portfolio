import React from "react";

import "./Home.css";
import HomeBar from "./HomeBar";
import HomeWelcome from "./HomeWelcome";

const Home = ({ homeContent, homeCommon, name, setLanguage }) => (
  <div id={homeContent.sectionId} className="home parallax">
    <HomeBar setLanguage={setLanguage} homeBarContent={homeCommon.homeBar} />
    <HomeWelcome homeWelcomeContent={homeContent.homeWelcome} name={name} />
  </div>
);

export default Home;
