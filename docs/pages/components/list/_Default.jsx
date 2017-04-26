import React, {PropTypes} from 'react'
import {List, ListItem} from '../../../../src/List'

class Default extends React.PureComponent {

  constructor(props){
    super(props);
  }

  render () {
    return (
      <List {...this.props}>
        <ListItem>Berlin, Germany</ListItem>
        <ListItem>London, UK</ListItem>
        <ListItem>Strasbourg, France</ListItem>
        <ListItem>Buenos Aires, Argentina</ListItem>
      </List>
    )
  }
}
export default Default;
