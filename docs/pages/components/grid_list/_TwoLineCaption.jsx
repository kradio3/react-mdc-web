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
import cardBg from './card_bg.jpg'

class TwoLineCaption extends React.PureComponent {

  renderTile(key) {
    const tile = (
      <Tile key={key}>
        <TilePrimary>
          <TileContent src={cardBg}/>
        </TilePrimary>
        <TileSecondary>
          <TileTitle>Tile title</TileTitle>
          <TileSupportText>Tile description</TileSupportText>
        </TileSecondary>
      </Tile>
    );
    return tile;
  }

  renderTiles(){
    let result = [];
    for(let i = 0; i< 3; i++) {
      result.push(this.renderTile(i));
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
