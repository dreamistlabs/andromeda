import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Heading extends Component {
  constructor(props) {
    super(props)
    this.classList = this.setClassList();
  }

  setClassList() {
    return Heading.defaultProps.className !== this.props.className
      ? (Heading.defaultProps.className.concat(' ', this.props.className)).trim()
      : Heading.defaultProps.className;
  }

  render() {
    const Element = this.props.as;

    return (
      <Element className={this.classList}>
        {this.props.children}
      </Element>
    );
  }
}

Heading.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
};

Heading.defaultProps = {
  as: 'h1',
  className: 'docs heading',
};

export default Heading;
