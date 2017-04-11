import React from 'react';
import TypographyElement from './TypographyElement';

const defaultProps = {
  component: 'h1',
};

const Headline = props => (
  <TypographyElement
    modificator="headline"
    {...props}
  />
);

Headline.defaultProps = defaultProps;
export default Headline;

