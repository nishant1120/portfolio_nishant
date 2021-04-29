import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Resume from "./Resume";
import Contact from "./Contact";
import Work from "./Work";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/resume" exact component={Resume} />

        <Route path="/contact" exact component={Contact} />

        <Route path="/work" component={Work} />

        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
