import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Text extends Component {
  constructor(props) {
    super(props)
    this.classList = this.setClassList();
  }

  setClassList() {
    return Text.defaultProps.className !== this.props.className
      ? (Text.defaultProps.className.concat(' ', this.props.className)).trim()
      : Text.defaultProps.className;
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

Text.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
};

Text.defaultProps = {
  as: 'p',
  className: 'docs text',
};

export default Text;
