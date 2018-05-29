import React, { Component } from 'react';
//-- documentation components
import Heading from '@doc-components/Heading';
import Panel from '@doc-components/Panel';
import Section from '@doc-components/Section';
import Text from '@doc-components/Text';
//-- data
import baselineData from '@data/documentation/baselineData';
//-- examples
import BaselineHeading from '@baseline-examples/BaselineHeading';
import BaselineLists from '@baseline-examples/BaselineLists';
import BaselineForms from '@baseline-examples/BaselineForms';
import BaselineDefinitionLists from '@baseline-examples/BaselineDefinitionLists';
import BaselinePreformattedText from '@baseline-examples/BaselinePreformattedText';
import BaselineTables from '@baseline-examples/BaselineTables';
import BaselineBlockquotes from '@baseline-examples/BaselineBlockquotes';
import BaselineMiscellaneous from '@baseline-examples/BaselineMiscellaneous';
//-- helpers
import * as h from 'helpers';

export default class BaselinePage extends Component {
  
  renderExample(section) {
    switch (section) {
    case "heading":
      return <BaselineHeading />;
    case "lists":
      return <BaselineLists />;
    case "forms":
      return <BaselineForms />;
    case "definition-lists":
      return <BaselineDefinitionLists />;
    case "preformatted-text":
      return <BaselinePreformattedText />;
    case "tables":
      return <BaselineTables />;
    case "blockquotes":
      return <BaselineBlockquotes />;
    case "miscellaneous":
      return <BaselineMiscellaneous />;
    default:
      return <div></div>;
    }
  }

  renderSections() {
    return baselineData.sections.map((section, i) => {
      return (
        <Section name={section.name} key={'section-' + i}>
          <Heading as={'h2'}>
            {h.formatHeading(section.name)}
          </Heading>  
          <Text className={'section__description'}>
            {section.description}
          </Text>
          <Panel>
            {this.renderExample(section.name)}
          </Panel>
        </Section>
      );
    });
  }

  render() {
    return (
      <Section className="container-fluid" name={'baseline'}>
        <Heading>Baseline</Heading>
        <Text>
          Sit, ristretto, body, cinnamon, cup con panna, bar robust doppio aged
          decaffeinated espresso. Americano filter coffee blue mountain,
          extraction, roast, acerbic filter milk skinny doppio. Mocha pumpkin
          spice percolator, filter carajillo, black sugar cortado caramelization
          so instant.
        </Text>

        {this.renderSections()}
      </Section>
    );
  }
}
