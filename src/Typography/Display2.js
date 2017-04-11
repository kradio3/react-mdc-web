import React from 'react';
import TypographyElement from './TypographyElement';

const defaultProps = {
  component: 'h1',
};

const Display2 = props => (
  <TypographyElement
    modificator="display2"
    {...props}
  />
);

Display2.defaultProps = defaultProps;
export default Display2;

