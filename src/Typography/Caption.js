import React from 'react';
import TypographyElement from './TypographyElement';

const defaultProps = {
  component: 'span',
};

const Caption = props => (
  <TypographyElement
    modificator="caption"
    {...props}
  />
);

Caption.defaultProps = defaultProps;
export default Caption;

