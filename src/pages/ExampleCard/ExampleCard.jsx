import React, { Component } from 'react';

import BaselineHeading from '../Examples/BaselineHeading';
import BaselineLists from '../Examples/BaselineLists';
import BaselineForms from '../Examples/BaselineForms';
import BaselineDefinitionLists from '../Examples/BaselineDefinitionLists';
import BaselinePreformattedText from '../Examples/BaselinePreformattedText';
import BaselineTables from '../Examples/BaselineTables';
import BaselineBlockquotes from '../Examples/BaselineBlockquotes';
import BaselineMiscellaneous from '../Examples/BaselineMiscellaneous';

export default class ExampleCard extends Component {
  renderExample() {
    let section = this.props.section;

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

  render() {
    return (
      <div className="docs__card">
        {this.renderExample()}
      </div>
    );
  }
}