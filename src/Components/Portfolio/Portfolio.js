import React from "react";

import "./Portfolio.css";
import Home from "../Home";
import Presentation from "../Presentation";
import AppFooter from "../AppFooter";
import Navigation from "../Navigation";

const Portfolio = () => (
  <div className="portfolio">
    <Home />
    <Presentation />
    <AppFooter />
    <Navigation />
  </div>
);

export default Portfolio;
