import React, {PropTypes} from 'react'
import {List, ListItem, ListGroup, ListHeader, ListDivider} from '../../../../src/List'

class Group extends React.PureComponent {

  constructor(props){
    super(props);
  }

  render () {
    return (
      <ListGroup>
        <ListHeader>By city</ListHeader>
        <List>
          <ListItem>Berlin, Germany</ListItem>
          <ListItem>London, UK</ListItem>
          <ListItem>Strasbourg, France</ListItem>
          <ListItem>Buenos Aires, Argentina</ListItem>
        </List>
        <ListDivider />
        <ListHeader>By planet</ListHeader>
        <List>
          <ListItem>Mercury</ListItem>
          <ListItem>Venus</ListItem>
          <ListItem>Earth</ListItem>
          <ListItem>Mars</ListItem>
        </List>
      </ListGroup>
    )
  }
}
export default Group;
