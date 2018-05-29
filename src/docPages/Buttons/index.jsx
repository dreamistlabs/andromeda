import React, { Component } from 'react';

import Button from '@components/Button';

export default class TempButtonCode extends Component {
  render() {
    return (
      <section className="docs section">
        <div className="container-fluid">
          <div className="section__header">
            <h2 className="section__heading">Buttons</h2>
            <p className="section__description"> Lorem ipsum</p>
          </div>

          <Button />

          <div className="docs card">
            <div>
              <button className="m31 btn btn--large">Read more</button>
              <div className="m31 btn btn--large">Read more</div>
              <input
                className="m31 btn btn--large"
                type="submit"
                value="Read more"
              />
              <a href="/" className="m31 btn btn--large">
                Read more
              </a>
            </div>
            &nbsp;
            <div className="section__example">
              <button className="m31 btn">Read more</button>
              <div className="m31 btn">Read more</div>
              <input className="m31 btn" type="submit" value="Read more" />
            </div>
            &nbsp;
            <div>
              <button className="m31 btn btn--small">Read more</button>
              <div className="m31 btn btn--small">Read more</div>
              <input
                className="m31 btn btn--small"
                type="submit"
                value="Read more"
              />
            </div>
            &nbsp;
            <div>
              <button className="m31 btn btn--round">Read more</button>
              <div className="m31 btn btn--pill">Read more</div>
              <input
                className="m31 btn btn--square"
                type="submit"
                value="Read more"
              />
            </div>
            &nbsp;
            <div>
              <button className="m31 btn btn--primary">Primary</button>
              <button className="m31 btn btn--secondary">Secondary</button>
              <button className="m31 btn btn--success">Success</button>
              <button className="m31 btn btn--info">Info</button>
              <button className="m31 btn btn--warning">Warning</button>
              <button className="m31 btn btn--error">Error</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
