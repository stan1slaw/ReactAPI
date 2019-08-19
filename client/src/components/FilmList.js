import React from 'react';
import '../App.css';
import Film from './Film'
class FilmList extends React.Component {
  constructor() {
    super()
    this.state = {
      films: []
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
        this.setState({films: films})
      } else {
        this.setState({films:[]})
      }
    } )
  }
 

  render() {
    let { films } = this.state
   
    return (
        <div>
          {films.map((film,key) => {
            return (
             <Film film={film} key={key} />
            )
          })}
        </div>
    )
  }
}



export default FilmList;
