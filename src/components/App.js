import React, { Component } from 'react';
import logo from '../logo.svg';

import BaselinePage from '../pages/baseline';
import GridSystemPage from '../pages/grid-system';

import Footer from './Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">

        <section className="docs section">
          <div className="container">
            <div className="section__header">
              <h2 className="section__heading">Buttons</h2>
              <p className="section__description"> Lorem ipsum</p>
            </div>
            <div className="section__flex__container">
              <div className="section__flex__child">
                <h3>Acceptable Elements</h3>
                <ul>
                  <li>button</li>
                  <li>div</li>
                  <li>span</li>
                  <li>a</li>
                </ul>
              </div>
              <div className="section__flex__child">
                <h3>Modifiers</h3>
                <ul>
                  <li>btn--sm</li>
                  <li>btn--md</li>
                  <li>btn--lg</li>
                </ul>
              </div>
              <div className="section__flex__child">
                <h3>Accessibility</h3>
                <p>Lorem ipsum</p>
              </div>
            </div>
            <div className="docs card">
              <div>
                <button className="m31 btn btn--lg">Read more</button>
                <div className="m31 btn btn--lg">Read more</div>
                <input className="m31 btn btn--lg" type="submit" value="Read more"/>
              </div>
              &nbsp;
              <div className="section__example">
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
          </div>
        </section>

        <BaselinePage />
        <GridSystemPage />

        <Footer />
      </div>
    );
  }
}

export default App;
