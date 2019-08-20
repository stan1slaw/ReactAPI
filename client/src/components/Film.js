import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import {Icon,Card, Image, Popup, Rating} from 'semantic-ui-react'
class Film extends React.Component {

    render() {
        let { film, keygen } = this.props
        return (
          <Popup 
          trigger = {
            <Card as={Link} to={`/film/${film.id}`}  key={keygen}>
    <Image src={film.avatars[0].url} wrapped as={'img'} className="image_type"/>
    <Card.Content>
      <Card.Header>{film.name}</Card.Header>  
      <Card.Meta>{film.time_create}</Card.Meta>
      <Card.Description>
        {film.description.substring(0,50) + '...'}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='user' />
        Producer: {film.producer}
    </Card.Content>
</Card>
        
    }>
      <Popup.Header>User Rating</Popup.Header>
    <Popup.Content>
      <Rating icon='star' defaultRating={film.rating} maxRating={5} />
    </Popup.Content>
  </Popup>
  )
  }
}
export default Film