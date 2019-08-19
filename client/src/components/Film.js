import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import {Icon,Card, Image} from 'semantic-ui-react'
class Film extends React.Component {

    render() {
        let { film, keygen } = this.props
        return (
            <Card as={Link} to={`/film/${film.id}`}  key={keygen} >
    <Image src={film.avatars[0].url} wrapped ui={false} />
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
        )
    }
}
export default Film