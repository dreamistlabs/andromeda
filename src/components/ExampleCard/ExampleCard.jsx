import React, { Component } from 'react';

class ExampleCard extends Component {

  render() {
    return (
      <div className={"docs " + this.props.cardClass} >
        <div className="card card--vertical-split">
          <div className="card__col-left" dangerouslySetInnerHTML={{__html: this.props.example}}>
          </div>
          <div className="card__col-right--fill">
            <pre>{this.props.example}</pre>
          </div>
        </div>
      </div>
    );
  }
}

export default ExampleCard;