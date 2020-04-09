import React from "react";

import "./Home.css";
import HomeBar from "./HomeBar";

const Home = ({ homeContent, setLanguage }) => (
  <div id={homeContent.sectionId} className="home">
    <HomeBar homeBarContent={homeContent.homeBar} setLanguage={setLanguage} />
  </div>
);

export default Home;
