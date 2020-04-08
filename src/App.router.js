import React from "react";
import { Route, Switch } from "react-router-dom";

import Portfolio from "./Components/Portfolio";

const AppRouter = () => (
  <Switch>
    <Route path="/" exact render={(props) => <Portfolio {...props} />} />
  </Switch>
);

export default AppRouter;
