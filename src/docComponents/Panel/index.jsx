import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Panel extends Component {
  constructor(props) {
    super(props)
    this.classList = this.setClassList();
    this.content = this.props.content;
  }

  setClassList() {
    return Panel.defaultProps.className !== this.props.className
      ? (Panel.defaultProps.className.concat(' ', this.props.className)).trim()
      : Panel.defaultProps.className;
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

Panel.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.any,
};

Panel.defaultProps = {
  as: 'div',
  className: 'docs panel',
  content: null,
};

export default Panel;
