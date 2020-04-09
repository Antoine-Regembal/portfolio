import React from "react";

import Navigation from "./Navigation";

const EnhancedNavigation = ({ appContent, navIcon }) => {
  const navLinks = Object.keys(appContent);

  return (
    <Navigation navLinks={navLinks} appContent={appContent} navIcon={navIcon} />
  );
};

export default EnhancedNavigation;
