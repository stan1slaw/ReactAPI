import React from 'react';
import '../App.css';
import Film from './Film'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, Rating, Image, List, Label, LabelGroup } from 'semantic-ui-react'
class FilmList extends React.Component {
  constructor() {
    super()
    this.state = {
      films: []
    }
  this.getFilms = this.getFilms.bind(this)
  this.getFilm = this.getFilm.bind(this)
  }



  componentDidMount() {
   this.getFilms()
  }

  fetch(endpoint) {
    return window.fetch(endpoint)
    .then(response => response.json())
    .catch(error => console.log(error))
  }

  getFilms () {
    this.fetch('/api/films')
    .then(films => {
      if (films.length) {
        this.setState({films: films})
        this.getFilm(films[0].id)
      } else {
        this.setState({films:[]})
      }
    } )
  }
  getFilm(id) {
    this.fetch(`/api/films/${id}`)
    .then(film => this.setState({film:film}))
  }
  render() {
    let { films, film } = this.state
   
    return films 
    ? <Container text>
        <Divider hidden section />
        {films && films.length
          ? <Button.Group color='teal' fluid widths={films.length}>
            {Object.keys(films).map((key) => {
              return <Button active={film && film.id === films[key].id} fluid key={key} onClick={() => this.getFilm(films[key].id)}>
                {films[key].name}
              </Button>
            })}
          </Button.Group>
          : <Container textAlign='center'>No films.</Container>

        }
        <Divider section />
        {film &&
          <Container>
            <Header as='h2' textAlign='center'>{film.name} <Rating rating={film.rating} maxRating={5} />
            </Header>
            <Image src={film.avatars.url} size='big' centered /><br/>
            
            {film.actors &&
              <Segment.Group>
                <List selection verticalAlign='middle'>
                <Header as='h2' textAlign='center'>Actors: </Header>
                {film.actors.map((actor, i) =>  <List.Item>
      <Image avatar src={film.avatars.url} />
      <List.Content>
        <List.Header>{actor.name}</List.Header>
      </List.Content>
    </List.Item>)}
          </List>
              </Segment.Group>
            }
             <Label.Group size='big'>
             {film.producer &&  <Label>Film producer: {film.producer}</Label>}
            {film.time_create && <Label>Film created at: {film.time_create}</Label>}
            {film.description && <Label>Description:{film.description}</Label>}
  </Label.Group>
           
          </Container>
        }
    </Container>
 : <Container text>
 <Dimmer active inverted>
   <Loader content='Loading' />
 </Dimmer>
</Container>
}
}

export default FilmList;
