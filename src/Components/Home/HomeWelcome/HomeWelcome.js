import React from "react";

import "./HomeWelcome.css";

const HomeWelcome = ({ homeWelcomeContent, name }) => (
  <div className="home-welcome home-welcome__animation home-welcome__animation--activation">
    <h1>
      {homeWelcomeContent.hi} {name}
    </h1>
    <h1>{homeWelcomeContent.welcome}</h1>
  </div>
);

export default HomeWelcome;
