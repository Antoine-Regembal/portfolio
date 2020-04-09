import React from "react";

import Navigation from "./Navigation";

const EnhancedNavigation = ({ appContent }) => {
  const navLinks = Object.keys(appContent);

  return <Navigation navLinks={navLinks} appContent={appContent} />;
};

export default EnhancedNavigation;
