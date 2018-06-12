import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import LoremIpsum from 'lorem-ipsum';
// import logo from '../logo.svg';

import AppRoutes from "../routes/appRoutes";

// import Dashboard from '../Components/Dashboard/Dashboard';
import Footer from "@doc-components/Footer";
import Sidebar from "@doc-components/Sidebar";

class App extends Component {
  render() {
    return (
      <Router>
        <div id="andromeda-documentation" className="app">
          <header id="site-header">
            <h1>Andromeda</h1>
            <div className="nav__toggle">
              <span />
              <span />
              <span />
            </div>
          </header>
          <Sidebar />
          <main className="main-content">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
