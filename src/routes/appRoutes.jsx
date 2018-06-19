import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import BaselinePage from "../docPages/Baseline";
import GridSystemPage from "../docPages/GridSystem";
import ButtonsPage from "../docPages/Buttons";

class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={GridSystemPage} />
        <Route exact path="/p/baseline" component={BaselinePage} />
        <Route exact path="/p/grid-system" component={GridSystemPage} />
        <Route exact path="/p/buttons" component={ButtonsPage} />
      </div>
    );
  }
}

export default AppRoutes;
