import React from "react";

import "./App.css";
import AppRouter from "./App.router";

const App = ({ appContent, setLanguage }) => (
  <AppRouter appContent={appContent} setLanguage={setLanguage} />
);

export default App;
