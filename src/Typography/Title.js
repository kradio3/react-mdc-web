import React from 'react';
import TypographyElement from './TypographyElement';

const defaultProps = {
  component: 'h2',
};

const Title = props => (
  <TypographyElement
    modificator="title"
    {...props}
  />
);

Title.defaultProps = defaultProps;
export default Title;

