import React, { Component } from 'react';
// import LoremIpsum from 'lorem-ipsum';
// import logo from '../logo.svg';

import Dashboard from '../components/Dashboard/Dashboard';
import BaselinePage from '../pages/baseline';
import TempButtonCode from '../pages/buttons-temp';
import GridSystemPage from '../pages/grid-system';
import './app.css';

import Footer from './Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
{/*        <div className="navbar">
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
        </div>*/}
        {/*<div className="container">
          <div className="row">
            <div className="col-lg-12">
            <p> sometihng</p>
            </div>
          </div>*/}

          {/*<Dashboard component="Cards" />*/}
          {/*<Dashboard component="Buttons" />*/}

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


        {/*<TempButtonCode />*/}
        <BaselinePage />
        {/*<GridSystemPage />*/}

        <Footer />
      </div>
    );
  }
}

export default App;
