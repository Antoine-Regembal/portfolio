import React from "react";

import "./App.css";
import appLogos from "./App.logos";
import AppRouter from "./App.router";

const App = ({ appContent, appCommon, setLanguage }) => (
  <AppRouter
    appContent={appContent}
    appCommon={appCommon}
    setLanguage={setLanguage}
    appLogos={appLogos}
  />
);

export default App;
