import React from 'react';
import TypographyElement from './TypographyElement';

const defaultProps = {
  component: 'h4',
};

const Subheading1 = props => (
  <TypographyElement
    modificator="subheading1"
    {...props}
  />
);

Subheading1.defaultProps = defaultProps;
export default Subheading1;

