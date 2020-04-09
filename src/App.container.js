import React, { useState } from "react";

import App from "./App";
import config from "./App.config";
import appContent from "./App.content";

const EnhancedApp = () => {
  const [language, setLanguage] = useState(config.languageDefault);

  const getAppContent = () => appContent[language];

  return <App appContent={getAppContent()} setLanguage={setLanguage} />;
};

export default EnhancedApp;
