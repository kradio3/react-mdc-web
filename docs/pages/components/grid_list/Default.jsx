import React, {PropTypes} from 'react'
import {GridList, Tile, TileTitle, TileContent, TileSecondary, TilePrimary }from '../../../../src/GridList'

class Default extends React.PureComponent {

  renderTiles(){
    const tile = (
      <Tile>
        <TilePrimary>
          <TileContent src= "card_bg.jpg"/>
        </TilePrimary>
        <TileSecondary>
          <TileTitle>Tile title</TileTitle>
        </TileSecondary>
      </Tile>
    );

    let result = [];
    for(let i = 0; i< 14; i++) {
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
export default Default;
