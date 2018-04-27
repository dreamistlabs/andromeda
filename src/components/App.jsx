import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import LoremIpsum from 'lorem-ipsum';
// import logo from '../logo.svg';

import AppRoutes from '../routes/appRoutes';

// import Dashboard from '../Components/Dashboard/Dashboard';
import Footer from '../docComponents/Footer/Footer';

import './app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>Andromeda</h1>
          </header>
          <main className="docs main-content">
            <aside className="docs sidebar">
              <nav className="sidebar__nav">
                <ul>
                  <li>
                    <Link to={'/p/baseline'}>Baseline</Link>
                  </li>
                  <li>
                    <Link to={'/p/grid-system'}>Grid System</Link>
                  </li>
                  <li>
                    <Link to={'/p/buttons'}>Buttons</Link>
                  </li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                </ul>
              </nav>
            </aside>

            <AppRoutes />
          </main>
          {/* <div className="navbar">
            <span> Default </span>
            <nav className="navbar__nav">
              <ul className="nav__navlist">
                <li className="navlist__item">
                  <a className="navlist__link" href="">
                    Nav Item
                  </a>
                </li>
                <li className="navlist__item">
                  <a className="navlist__link" href="">
                    Nav Item
                  </a>
                </li>
                <li className="navlist__item">
                  <a className="navlist__link" href="">
                    Nav Item
                  </a>
                </li>
                <li className="navlist__item">
                  <a className="navlist__link" href="">
                    Nav Item
                  </a>
                </li>
                <li className="navlist__item">
                  <a className="navlist__link" href="">
                    Nav Item
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="navbar">
            <span> Underline Hover State </span>
            <nav className="navbar__nav">
              <ul className="nav__navlist navlist--hover-1">
                <li className="navlist__item">
                  <a className="navlist__link" href="">
                    Nav Item
                  </a>
                </li>
                <li className="navlist__item">
                  <a className="navlist__link" href="">
                    Nav Item
                  </a>
                </li>
                <li className="navlist__item">
                  <a className="navlist__link" href="">
                    Nav Item
                  </a>
                </li>
                <li className="navlist__item">
                  <a className="navlist__link" href="">
                    Nav Item
                  </a>
                </li>
                <li className="navlist__item">
                  <a className="navlist__link" href="">
                    Nav Item
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="navbar navbar--dark">
            <span> Dark Theme </span>
            <nav className="navbar__nav">
              <ul className="nav__navlist">
                <li className="navlist__item">
                  <a className="navlist__link" href="">
                    Nav Item
                  </a>
                </li>
                <li className="navlist__item">
                  <a className="navlist__link" href="">
                    Nav Item
                  </a>
                </li>
                <li className="navlist__item">
                  <a className="navlist__link" href="">
                    Nav Item
                  </a>
                </li>
                <li className="navlist__item">
                  <a className="navlist__link" href="">
                    Nav Item
                  </a>
                </li>
                <li className="navlist__item">
                  <a className="navlist__link" href="">
                    Nav Item
                  </a>
                </li>
              </ul>
            </nav>
          </div> */}
          {/*<div className="container">
            <div className="row">
              <div className="col-lg-12">
              <p> sometihng</p>
              </div>
            </div>*/}

          {/*<div className="tileset">
              <div className="tileset__tile">
                <span>icon</span>
                <span>Dashboard</span>
              </div>
              <div className="tileset__tile">
                <span>icon</span>
                <span>Dashboard</span>
              </div>
              <div className="tileset__tile">
                <span>icon</span>
                <span>Dashboard</span>
              </div>
              <div className="tileset__tile">
                <span>icon</span>
                <span>Dashboard</span>
              </div>
              <div className="tileset__tile">
                <span>icon</span>
                <span>Dashboard</span>
              </div>
              <div className="tileset__tile">
                <span>icon</span>
                <span>Dashboard</span>
              </div>
              <div className="tileset__tile">
                <span>icon</span>
                <span>Dashboard</span>
              </div>
            </div>
          </div>*/}

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
