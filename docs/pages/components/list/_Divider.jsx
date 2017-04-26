import React, {PropTypes} from 'react'
import {List, ListItem, ListDivider} from '../../../../src/List'
import Icon from '../../../../src/Icon';
import {Grid, Cell} from '../../../../src/Grid' 

class Divider extends React.PureComponent {

  constructor(props){
    super(props);
  }

  render () {
    return (
      <Grid>
        <Cell col={6}>
          <List>
            <ListItem>Berlin, Germany</ListItem>
            <ListDivider/>
            <ListItem>London, UK</ListItem>
            <ListDivider/>
            <ListItem>Strasbourg, France</ListItem>
            <ListDivider/>
            <ListItem>Buenos Aires, Argentina</ListItem>
          </List>
        </Cell>

        <Cell col={6}>
          <List>
            <ListItem><Icon name="favorite_border"/>Berlin, Germany</ListItem>
            <ListDivider inset />
            <ListItem><Icon name="favorite_border"/>London, UK</ListItem>
            <ListDivider inset />
            <ListItem><Icon name="favorite_border"/>Strasbourg, France</ListItem>
            <ListDivider inset />
            <ListItem><Icon name="favorite_border"/>Buenos Aires, Argentina</ListItem>
          </List>
        </Cell>
      </Grid>
    )
  }
}
export default Divider;
