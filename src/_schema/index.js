import PropTypes from 'prop-types';

/* Generic / Common Schemas */
const STATES = [
  'default',
  'primary',
  'success',
  'secondary',
  'info',
  'warning',
  'error',
  'wire'
];

/* Component Schemas */
export const ButtonSchema = {
  sizes: ['small', 'medium', 'large', 'xlarge'],
  states: STATES,
  styles: ['pill', 'round', 'square']
};

export const CommonPropTypes = {
  as: PropTypes.string,
  className: PropTypes.string
};

export const CommonDefaultProps = {
  as: 'div',
  className: ''
};
