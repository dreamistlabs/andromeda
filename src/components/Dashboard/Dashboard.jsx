import React, { Component } from 'react';
import Card from '../Card/Card';
import ComponentData from '../../data/components.data';
import ComponentExampleData from '../../data/component-examples.data';

import './dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.componentName = this.props.component;
    this.component = ComponentData[this.componentName];
    this.componentVariations = ComponentExampleData[this.componentName].variations;
  }

  // find component data in ./src/data/components.data.json
  renderDescription() {
    return (<p>{this.component["description"]}</p>);
  }

  renderAccessibility() {
    return (<p>{this.component["accessibility"]}</p>);
  }

  renderAcceptibleElements() {
    return (
      <ul>
        {this.component["acceptableElements"].map((element, idx) => {
          return (<li key={`${idx}--${element}-element`}>{element}</li>);
        })}
      </ul>
    );
  }

	render() {
		return (
			<section id="" className="docs dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1>Yay, Big Title - {this.componentName}</h1>
              {this.renderDescription()}
            </div>
          </div>
          <div className="row row--card-has-same-height">
            <div className="col-6">
              <Card title="Accessibility" content={this.renderAccessibility()} />
            </div>
            <div className="col-6">
              <Card title="Applicable Elements" content={this.renderAcceptibleElements()} />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Card title="Modifiers" content="" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Card title="Cool, a Subsection - Examples and Code" content="">
                <div className="docs card">
                  <pre>{this.componentVariations["Default"]}</pre>
                </div>
                <div className="docs card">
                  <pre>{this.componentVariations["Default"]}</pre>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
		);
	}
}

export default Dashboard;