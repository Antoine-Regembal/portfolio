import React from "react";

import "./App.css";
import AppRouter from "./App.router";

const App = ({ appContent, appCommon, setLanguage }) => (
  <AppRouter
    appContent={appContent}
    appCommon={appCommon}
    setLanguage={setLanguage}
  />
);

export default App;
