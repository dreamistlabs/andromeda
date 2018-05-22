import React, { Component } from 'react';
//-- documentation components
import Heading from 'docComponents/Heading';
import Section from 'docComponents/Section';
import Text from 'docComponents/Text';
import ExampleCard from '../ExampleCard/ExampleCard';
//-- data
import baselineData from '_data/documentation/baselineData';
//-- helpers
import * as h from 'helpers';

export default class BaselinePage extends Component {
  renderSections() {
    return baselineData.sections.map((section, i) => {
      return (
        <Section
          className={'section'}  
          name={section.name}
          key={'section-' + i}
        >
          <Heading as={'h2'}>
            {h.formatHeading(section.name)}
          </Heading>  
          <Text className={'section__description'}>
            {section.description}
          </Text>
          <ExampleCard section={section.name} />
        </Section>
      );
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 className="docs heading">Baseline</h1>
        <p>
          Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio aged
          decaffeinated espresso. Americano filter coffee blue mountain,
          extraction, roast, acerbic filter milk skinny doppio. Mocha pumpkin
          spice percolator, filter carajillo, black sugar cortado caramelization
          so instant.
        </p>

        {this.renderSections()}
      </div>
    );
  }
}
