import React from "react";

import "./Home.css";
import HomeBar from "./HomeBar";

const Home = ({ homeContent }) => (
  <div id={homeContent.sectionId} className="home">
    <HomeBar homeBarContent={homeContent.homeBar} />
  </div>
);

export default Home;
