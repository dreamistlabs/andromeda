import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonSchema, CommonDefaultProps, CommonPropTypes } from '@schema';

/**
 * Define propTypes specific to component.
 */
const propTypes = {
  size: PropTypes.string,
  state: PropTypes.string,
  tabIndex: PropTypes.bool,
  toggle: PropTypes.bool
};

/**
 * Define defaultProps specific to component.
 */
const defaultProps = {
  as: 'button',
  size: 'medium',
  state: 'default',
  tabIndex: true,
  toggle: false
};

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classList: 'btn'
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps !== prevState.props) {
      console.log('no,match', nextProps, prevState);
      return {
        classList: Button.setClassList(nextProps, prevState),
        includeTabIndex: nextProps.tabIndex,
        isToggleButton: nextProps.toggle,
        props: nextProps
      };
    }
    console.log('yes - matched!!', nextProps, prevState);
    return null;
  }

  renderButton() {
    const Element = this.props.as;
    return (
      <Element className={this.state.classList}>
        {this.props.children || 'Submit'}
      </Element>
    );
  }

  render() {
    console.log(this);
    return this.renderButton();
  }

  /* helper methods */
  static setClassList(props, state) {
    let classList = `btn ${[
      ButtonSchema['sizes'].includes(props.size)
        ? `btn--${props.size}`
        : `btn--medium`,
      ButtonSchema['styles'].includes(props.style)
        ? `btn--${props.style}`
        : `btn--square`,
      ButtonSchema['states'].includes(props.state)
        ? `btn--${props.state}`
        : `btn--default`,
      props.className
    ].join(' ')}`.trim();

    return classList;
  }
}

/**
 * Set component propTypes and defaultProps, which is a combination of
 * common properties and the component-specific definitions defined above.
 *
 */
Button.propTypes = Object.assign({}, CommonPropTypes, propTypes);

Button.defaultProps = Object.assign({}, CommonDefaultProps, defaultProps);

export default Button;
