import React, { Component } from 'react';
import logo from '../logo.svg';

import GridSystemPage from '../pages/grid-system';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GridSystemPage />

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
    );
  }
}

export default App;
