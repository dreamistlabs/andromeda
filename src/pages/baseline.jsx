import React, { Component } from 'react';

import Section from './Section/Section';
import ExampleCard from './ExampleCard/ExampleCard';

import sections from '../data/baseline-section-content';

export default class BaselinePage extends Component {
  renderSections() {
    return Object.keys(sections).map((section) => {
      return (
        <Section name={section}>
          <p className="docs section__description">
            {sections[section].description}
          </p>

          <ExampleCard section={section}/>
        </Section>
      )
    });
  }

  render() {
    return(
      <div className="container">
        <h1 className="docs heading">Baseline</h1>
        <p>
          Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio aged decaffeinated espresso. Americano filter coffee blue mountain, extraction, roast, acerbic filter milk skinny doppio. Mocha pumpkin spice percolator, filter carajillo, black sugar cortado caramelization so instant.
        </p>

        {this.renderSections()}
    </div>
    )
  }
}