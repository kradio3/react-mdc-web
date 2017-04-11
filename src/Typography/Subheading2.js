import React from 'react';
import TypographyElement from './TypographyElement';

const defaultProps = {
  component: 'h3',
};

const Subheading2 = props => (
  <TypographyElement
    modificator="subheading2"
    {...props}
  />
);

Subheading2.defaultProps = defaultProps;
export default Subheading2;

