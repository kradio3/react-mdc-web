import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Card from '../../../../src/Card/Card'
import CardHeader from '../../../../src/Card/CardHeader'
import CardTitle from '../../../../src/Card/CardTitle'
import CardSubtitle from '../../../../src/Card/CardSubtitle'
import CardText from '../../../../src/Card/CardText'
import CardActions from '../../../../src/Card/CardActions'
import CardMedia from '../../../../src/Card/CardMedia'
import Button from '../../../../src/Button/Button'

class Template extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    const textContainer = document.getElementById("text-card");
    ReactDOM.render(this.renderTextCard(), textContainer);

    const mediaContainer = document.getElementById("media-card");
    ReactDOM.render(this.renderMediaCard(), mediaContainer);
  } 

  renderTextCard() {
    return (
      <Card style={{width: '500px', margin: '16px'}}>
        <CardHeader>
          <CardTitle>Title goes here</CardTitle>
          <CardSubtitle>Subtitle</CardSubtitle>
        </CardHeader>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </CardText>
        <CardActions>
          <Button compact primary>action 1</Button>
          <Button compact >action 2</Button>
        </CardActions>
      </Card>
    )
  }

  renderMediaCard() {
    return (
      <Card style={{width: '500px', margin: '16px'}}>
        <CardHeader>
          <CardTitle>Title goes here</CardTitle>
        </CardHeader>
        <CardMedia 
          style={{
            backgroundImage: 'url("card_bg.jpg")',
            height: '300px',
            backgroundSize: 'cover',
          }}
        />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </CardText>
        <CardActions>
          <Button compact primary>action 1</Button>
          <Button compact >action 2</Button>
        </CardActions>
      </Card>
    )
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
export default Template;
