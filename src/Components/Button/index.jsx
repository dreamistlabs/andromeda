import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ButtonSchema } from '@schema';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classList: 'btn',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps !== prevState.props) {
      console.log('no,match', nextProps, prevState);
      return {
        classList: Button.setClassList(nextProps, prevState),
        includeTabIndex: nextProps.tabIndex,
        isToggleButton: nextProps.toggle,
        props: nextProps,
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
      props.className,
    ].join(' ')}`.trim();

    return classList;
  }
}

Button.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  state: PropTypes.string,
  tabIndex: PropTypes.bool,
  toggle: PropTypes.bool,
};

Button.defaultProps = {
  as: 'button',
  className: '',
  size: 'medium',
  state: 'default',
  tabIndex: true,
  toggle: false,
};

export default Button;
