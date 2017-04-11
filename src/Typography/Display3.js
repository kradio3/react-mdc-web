import React from 'react';
import TypographyElement from './TypographyElement';

const defaultProps = {
  component: 'h1',
};

const Display3 = props => (
  <TypographyElement
    modificator="display3"
    {...props}
  />
);

Display3.defaultProps = defaultProps;
export default Display3;

