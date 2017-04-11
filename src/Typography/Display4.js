import React from 'react';
import TypographyElement from './TypographyElement';

const defaultProps = {
  component: 'h1',
};

const Display4 = props => (
  <TypographyElement
    modificator="display4"
    {...props}
  />
);

Display4.defaultProps = defaultProps;
export default Display4;

