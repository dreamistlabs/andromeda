import React, { Component } from 'react';

export default class TempButtonCode extends Component {
  render(){
    return (
      <section className="docs section">
          <div className="container">
            <div className="section__header">
              <h2 className="section__heading">Buttons</h2>
              <p className="section__description"> Lorem ipsum</p>
            </div>
            <div className="docs card">
              <div>
                <button className="m31 btn btn--lg">Read more</button>
                <div className="m31 btn btn--lg">Read more</div>
                <input className="m31 btn btn--lg" type="submit" value="Read more"/>
                <a href="" className="m31 btn btn--lg">Read more</a>
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
              &nbsp;
              <div>
                <button className="m31 btn btn--round">Read more</button>
                <div className="m31 btn btn--pill">Read more</div>
                <input className="m31 btn btn--square" type="submit" value="Read more"/>
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
