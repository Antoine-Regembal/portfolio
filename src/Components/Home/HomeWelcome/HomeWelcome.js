import React from "react";

import "./HomeWelcome.css";

const HomeWelcome = ({ homeWelcomeContent, name }) => (
  <div className="home-welcome home-welcome__animation home-welcome__animation--activation">
    <h1>
      {homeWelcomeContent.hi} {name}
    </h1>
    <h2>{homeWelcomeContent.welcome}</h2>
  </div>
);

export default HomeWelcome;
