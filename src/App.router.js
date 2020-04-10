import React from "react";
import { Route, Switch } from "react-router-dom";

import Portfolio from "./Components/Portfolio";

const AppRouter = ({ appContent, appCommon, setLanguage, appLogos }) => (
  <Switch>
    <Route
      path="/"
      exact
      render={(props) => (
        <Portfolio
          {...props}
          appContent={appContent}
          appCommon={appCommon}
          setLanguage={setLanguage}
          appLogos={appLogos}
        />
      )}
    />
  </Switch>
);

export default AppRouter;
