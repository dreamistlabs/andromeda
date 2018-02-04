import React, { Component } from 'react';
import LoremIpsum from 'lorem-ipsum';

class Card extends Component {

  render() {
    return (
      <div className="card card--default">
        <div className="card__header">
          <h2 className="card__title">{this.props.title}</h2>
        </div>
        <div className="card__content">
          {this.props.content}
          {this.props.children}
        </div>
        <div className="card__footer">
          <p>{LoremIpsum({count: 1, units: 'sentences', sentenceLowerBound: 8, sentenceUpperBound: 10})}</p>
        </div>
      </div>
    );
  }
}

export default Card;