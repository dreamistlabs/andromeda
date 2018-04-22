import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import BaselinePage from '../docPages/Baseline';
import GridSystemPage from '../docPages/GridSystem';
import ButtonsPage from '../docPages/Buttons';


class AppRoutes extends Component {
  render() {
    return(
      <div>
        <Route path="/p/baseline"     component={BaselinePage} />
        <Route path="/p/grid-system"  component={GridSystemPage} />
        <Route path="/p/buttons"      component={ButtonsPage} />
      </div>
    )
  }

}

export default AppRoutes;