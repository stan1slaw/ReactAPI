import React from 'react'
import '../App.css'
class FilmShow extends React.Component {
    constructor() {
        super()
        this.state = {
            film: []
        }

        
    }

   componentDidMount() {
    window.fetch(`/api/films/${this.props.match.params.id}`)
    .then(results => results.json())
    .then(json => this.setState({film:json}))
    .catch(error => console.log(error))
   }
    
    render() {
    let { film } = this.state
    let { actors } = film
    console.log(film)
      return (
        <div>
          <h1>{film.name}</h1>
          <hr/>
          <p>{film.description}</p>
          </div>
      )
    }
      
}
export default FilmShow;