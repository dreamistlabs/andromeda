import React, { Component } from 'react';
import logo from '../logo.svg';

import BaselinePage from '../pages/baseline';
import GridSystemPage from '../pages/grid-system';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="playground">
          <div>
            <button className="m31 btn btn--lg">Read more</button>
            <div className="m31 btn btn--lg">Read more</div>
            <input className="m31 btn btn--lg" type="submit" value="Read more"/>
          </div>
          &nbsp;
          <div>
            <button className="m31 btn">Read more</button>
            <div className="m31 btn">Read more</div>
            <input className="m31 btn" type="submit" value="Read more"/>
          </div>
          &nbsp;
          <div>
            <button className="m31 btn btn--sm">Read more</button>
            <div className="m31 btn btn--sm">Read more</div>
            <input className="m31 btn btn--sm" type="submit" value="Read more"/>
          </div>
        </div>

        <BaselinePage />
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
