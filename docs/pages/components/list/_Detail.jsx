import React, {PropTypes} from 'react'
import {List, ListItem} from '../../../../src/List'
import Icon from '../../../../src/Icon';
import {Grid, Cell} from '../../../../src/Grid' 

class Detail extends React.PureComponent {

  constructor(props){
    super(props);
  }

  render () {
    return (
      <List style={{maxWidth: '400px'}}>
        <ListItem>
          <Icon name="star"/>
          Berlin, Germany
          <Icon name="check"/>
        </ListItem>
        <ListItem>
          <Icon name="access_time"/>
          London, UK
          <Icon name="check"/>
        </ListItem>
        <ListItem>
          <Icon name="add_a_photo"/>
          Strasbourg, France
          <Icon name="check"/>
        </ListItem>
        <ListItem>
          <Icon name="favorite"/>
          Buenos Aires, Argentina
          <Icon name="check"/>
        </ListItem>
      </List>
    )
  }
}
export default Detail;
