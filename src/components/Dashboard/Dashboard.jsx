import React, { Component } from 'react';
import Card from '../Card/Card';
import ComponentData from '../../data/components.data';
import ComponentExampleData from '../../data/component-examples.data';
import ExampleCard from '../ExampleCard/ExampleCard';

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
    ); // EoR
  }
  renderExamples() {
    return (
      Object.keys(this.componentVariations).map((variation, idx) => {
        return <ExampleCard example={this.componentVariations[variation]}
                            cardClass="dashboard__example"
                            key={`${idx}--${variation}-variation`} />
      })
    ); // EoR
  }

	render() {
		return (
			<section id="" className="docs dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1>Yay, Big Title - {this.componentName}</h1>
              {this.renderDescription()}
            </div>
          </div>
          <div className="row row--card-has-same-height">
            <div className="col-md-6">
              <Card title="Accessibility" content={this.renderAccessibility()} />
            </div>
            <div className="col-md-6">
              <Card title="Applicable Elements" content={this.renderAcceptibleElements()} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Card title="Modifiers" content="" />
            </div>
          </div>
          <section className="docs dashboard__examples">
            <div className="row">
              <div className="col-md-12">
                <h2>Cool, a Subsection - Examples and Code</h2>
                {this.renderExamples()}
              </div>
            </div>
          </section>
        </div>
      </section>
		);
	}
}

export default Dashboard;