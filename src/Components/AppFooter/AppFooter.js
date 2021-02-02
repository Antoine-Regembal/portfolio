import React from "react";

import "./AppFooter.css";

const AppFooter = ({ name }) => (
  <div className="app-footer">
    <span>Copyright (c) 2020 {name} - </span>
    <a rel="findMeOnMastodon" href="https://fosstodon.org/@AntoineRGB">Mastodon</a>
  </div>
);

export default AppFooter;
