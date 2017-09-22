import React, { Component } from 'react';
import logo from '../logo.svg';

import BaselinePage from '../pages/baseline';
import GridSystemPage from '../pages/grid-system';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="docs banner-section">
          <div className="docs logo">
            <h1>Andromeda <span>Documentation</span></h1>
          </div>
        </div>
        <div className="docs main-section">
          <div className="docs sidebar">
            <nav className="docs">
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 1</li>
                <li>Item 2</li>

              </ul>
            </nav>
          </div>
          <div className="docs content-section">

            <BaselinePage />

            <footer className="docs footer">
              <div className="container-fluid">
                <p className="docs footer__text">
                  <strong>Andromeda</strong> <br/>
                  Created by Johnny Hu — Head Dreamer at Dreamist Labs. <br/>
                  Copyright 2017 Dreamist Labs.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
