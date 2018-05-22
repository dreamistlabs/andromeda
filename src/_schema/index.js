/* Generic / Common Schemas */
const STATES = [
  'default',
  'primary',
  'success',
  'secondary',
  'info',
  'warning',
  'error',
];

/* Component Schemas */
const ButtonSchema = {
  sizes: ['small', 'medium', 'large', 'xlarge'],
  states: STATES,
  styles: ['pill', 'round', 'square'],
};

export { ButtonSchema };
