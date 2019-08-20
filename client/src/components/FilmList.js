import React from 'react';
import '../App.css';
import Film from './Film' 
import { Card, Dimmer, Loader, Image } from 'semantic-ui-react';
class FilmList extends React.Component {
  constructor() {
    super()
    this.state = {
      films: [],
      isFetching: true
    }
  this.getFilms = this.getFilms.bind(this)
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
        this.setState({films: films, isFetching: false})
      } else {
        this.setState({films:[]})
      }
    } )
  }
 

  render() {
    let { films, isFetching } = this.state

    if (isFetching) return  <div>
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
  
      <Image src='/images/wireframe/short-paragraph.png' />
      </div>
    return (
      
        <Card.Group>         
           {films.map((film,key) => {
            return (
             <Film film={film} key={key} />
            )
          })}
          </Card.Group>
    )
  }
}



export default FilmList;
