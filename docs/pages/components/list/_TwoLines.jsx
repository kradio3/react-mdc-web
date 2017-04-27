import React, {PropTypes} from 'react'
import {List, ListItem, ListItemText, ListItemTextSecondary} from '../../../../src/List'

class TwoLines extends React.PureComponent {

  constructor(props){
    super(props);
  }

  render () {
    return (
      <List>
        <ListItem>
          <ListItemText>
            Berlin
            <ListItemTextSecondary> Germany </ListItemTextSecondary>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            London
            <ListItemTextSecondary> United Kingdom </ListItemTextSecondary>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            Strasbourg
            <ListItemTextSecondary> France </ListItemTextSecondary>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            Buenos Aires
            <ListItemTextSecondary> Argentina </ListItemTextSecondary>
          </ListItemText>
        </ListItem>
      </List>
    )
  }
}
export default TwoLines;
