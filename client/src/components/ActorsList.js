import React from 'react'
import '../App.css'
import  {Card, Image} from 'semantic-ui-react'
class ActorsList extends React.Component {
    constructor() {
        super()
        this.state = {
            actors: []
        }
    }
    componentDidMount() {
        window.fetch('/api/actors')
        .then(response => response.json())
        .then(json  => this.setState({actors: json}))
    }
    render() {
       let  { actors } = this.state
        
        return (
            <div className="row actor">
                {actors.map((actor, i) =>  <div className="actors" key={i}> <Card>
    <Image src={actor.avatar.url} wrapped ui={false} size={"medium"}/>
    <Card.Content>
      <Card.Header>{actor.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{actor.years}</span>
      </Card.Meta>
      <Card.Description>
       {actor.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card> </div>)}
            </div>
        )
    }
}
export default ActorsList;