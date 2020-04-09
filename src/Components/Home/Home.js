import React from "react";

import "./Home.css";
import HomeBar from "./HomeBar";

const Home = ({ homeContent, homeCommon, setLanguage }) => (
  <div id={homeContent.sectionId} className="home">
    <HomeBar setLanguage={setLanguage} homeBarContent={homeCommon} />
  </div>
);

export default Home;
