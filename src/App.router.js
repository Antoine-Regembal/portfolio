import React from "react";
import { Route, Switch } from "react-router-dom";

import Portfolio from "./Components/Portfolio";

const AppRouter = ({ appContent }) => (
  <Switch>
    <Route
      path="/"
      exact
      render={(props) => <Portfolio {...props} appContent={appContent} />}
    />
  </Switch>
);

export default AppRouter;
