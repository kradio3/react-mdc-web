import React, {PropTypes} from 'react'
import {
  Typography, 
  Caption, 
  Display4, 
  Display3, 
  Display2, 
  Display1,
  Headline,
  Title,
  Subheading2,
  Subheading1,
  Body2,
  Body1,
} from '../../../../src/Typography'

class Default extends React.PureComponent {

  render () {
    return (
      <Typography>
        <Display4>Display4</Display4>
        <Display3>Display3</Display3>
        <Display2>Display2</Display2>
        <Display1>Display1</Display1>
        <Headline>Headline</Headline>
        <Title>Title</Title>
        <Subheading2>Subheading2</Subheading2>
        <Subheading1>Subheading1</Subheading1>
        <Body2>Body2</Body2>
        <Body1>Body1</Body1>
        <Caption>Caption</Caption>
      </Typography>
    )
  }
}
export default Default;
