import React from 'react'
import '../App.css'
import  { Rating, List, Header, Image, Container, Label, Segment, Dimmer, Loader} from 'semantic-ui-react'
class FilmShow extends React.Component {
    constructor() {
        super()
        this.state = {
          film: {}, 
          isFetching: true 
        }

        
    }

   componentDidMount() {
    window.fetch(`/api/films/${this.props.match.params.id}`)
    .then(results => results.json())
    .then(json => this.setState({film:json, isFetching: false}))
    .catch(error => console.log(error))
   }
    
    render() {
    const {film, isFetching, error} = this.state
    if (isFetching) return  <div>
    <Dimmer active inverted>
      <Loader inverted>Loading</Loader>
    </Dimmer>

    <Image src='/images/wireframe/short-paragraph.png' />
    </div>
    if (error) return <div>{`Error: ${error.message}`}</div>;
      return (
        <div>
          <h1 className="text-center">{film.name}  <Rating rating={film.rating} maxRating={5} /></h1>
          <hr/>
          <div className='photos'>
         {film.avatars.map(function(photo,key) {
           return(
             <div key={key} className="photo"><img src={photo.url} alt={key} className="img-thumbnail"/></div>
           )
         })}
         </div>
         <hr/>
         <div className="row">
         <div className="col-md-8">
         <Container fluid>
      <Header as='h2'>Description:</Header>
      <p>
      
        {film.description}
      </p>
      <Label as='a' color='blue' image>
      <img src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' alt="people"/>
     {film.producer}
      <Label.Detail>Producer</Label.Detail>
    </Label>
    </Container>
</div>
         <div className="col-md-4 actors_list">

         {film.actors &&
              <Segment.Group>
                <List selection verticalAlign='middle'>
                <Header as='h2' textAlign='center'>Actors: </Header>
                {film.actors.map((actor, i) =>  <List.Item>
      <Image avatar src={actor.avatar.url} />
      <List.Content>
        <List.Header>{actor.name}</List.Header>
      </List.Content>
    </List.Item>)}
          </List>
              </Segment.Group>
            }
         </div>
         </div>
          </div>
      )
    }
}

export default FilmShow;