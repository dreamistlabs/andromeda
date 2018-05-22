import React, { Component } from 'react';
//-- documentation components
import Heading from 'docComponents/Heading';
import Panel from 'docComponents/Panel';
import Section from 'docComponents/Section';
import Text from 'docComponents/Text';
//-- data
import baselineData from '_data/documentation/baselineData';
//-- examples
import BaselineHeading from 'docPages/Baseline/Examples/BaselineHeading';
import BaselineLists from 'docPages/Baseline/Examples/BaselineLists';
import BaselineForms from 'docPages/Baseline/Examples/BaselineForms';
import BaselineDefinitionLists from 'docPages/Baseline/Examples/BaselineDefinitionLists';
import BaselinePreformattedText from 'docPages/Baseline/Examples/BaselinePreformattedText';
import BaselineTables from 'docPages/Baseline/Examples/BaselineTables';
import BaselineBlockquotes from 'docPages/Baseline/Examples/BaselineBlockquotes';
import BaselineMiscellaneous from 'docPages/Baseline/Examples/BaselineMiscellaneous';
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
