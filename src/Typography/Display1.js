import React from 'react';
import TypographyElement from './TypographyElement';

const defaultProps = {
  component: 'h1',
};

const Display1 = props => (
  <TypographyElement
    modificator="display1"
    {...props}
  />
);

Display1.defaultProps = defaultProps;
export default Display1;

