import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  constructor(props) {
    super(props)
    this.classList = ('docs section'.concat(' ', this.props.className)).trim();
  }

  render() {
    return (
      <section className={this.classList} name={this.props.name}>
        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  className: PropTypes.string,
};

Section.defaultProps = {
  className: '',
};

export default Section;
