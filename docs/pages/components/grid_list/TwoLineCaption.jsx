import React, {PropTypes} from 'react'
import {
  GridList, 
  Tile, 
  TileTitle, 
  TileContent, 
  TileSecondary, 
  TilePrimary, 
  TileSupportText,
}from '../../../../src/GridList'

class TwoLineCaption extends React.PureComponent {

  renderTiles(){
    const tile = (
      <Tile>
        <TilePrimary>
          <TileContent src= "card_bg.jpg"/>
        </TilePrimary>
        <TileSecondary>
          <TileTitle>Tile title</TileTitle>
          <TileSupportText>Tile description</TileSupportText>
        </TileSecondary>
      </Tile>
    );

    let result = [];
    for(let i = 0; i< 3; i++) {
      result.push(tile);
    }
    return result;
  }

  render () {
    return (
      <GridList {...this.props}>
        {this.renderTiles()}
      </GridList>
    )
  }
}
export default TwoLineCaption;
