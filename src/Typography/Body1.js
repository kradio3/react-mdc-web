import React from 'react';
import TypographyElement from './TypographyElement';

const defaultProps = {
  component: 'p',
};

const Body1 = props => (
  <TypographyElement
    modificator="body1"
    {...props}
  />
);

Body1.defaultProps = defaultProps;
export default Body1;

