import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import BaselinePage from '../pages/baseline';
import GridSystemPage from '../pages/grid-system';
import TempButtonCode from '../pages/buttons-temp';


class AppRoutes extends Component {
  render() {
    return(
      <div>
        <Route path="/p/baseline"     component={BaselinePage} />
        <Route path="/p/grid-system"  component={GridSystemPage} />
        <Route path="/p/buttons"      component={TempButtonCode} />
      </div>
    )
  }

}

export default AppRoutes;