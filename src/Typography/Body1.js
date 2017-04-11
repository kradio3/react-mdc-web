import React from 'react';
import TypographyElement from './TypographyElement';

const defaultProps = {
  component: 'p',
};

const Body2 = props => (
  <TypographyElement
    modificator="body2"
    {...props}
  />
);

Body2.defaultProps = defaultProps;
export default Body2;

