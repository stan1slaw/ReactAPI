import React, {Fragment} from 'react'
import jwtDecode from 'jwt-decode'
import '../App.css'
import {Button, Icon, Grid, Image, Feed} from 'semantic-ui-react'
class Profile extends React.Component {
    constructor() {
        super();
    
        this.state = {
            username: ''
        }
        this.SignOut = this.SignOut.bind(this)
    }
    
    SignOut() {
        let jwt = window.localStorage.removeItem('jwt')
        this.props.history.push('/login')
    }
    componentDidMount() {
        let jwt = window.localStorage.getItem('jwt');
        if (jwt) {
            let result = jwtDecode(jwt);
            this.setState({
                username: result.username
            })
            console.log(result);
        }
        
    }

    render() {
            return (

                <Grid>
                     <Grid.Column width={1}></Grid.Column>
    <Grid.Column width={3}>
      <Image src={this.state.username.avatar? this.state.username.avatar.url : 'https://react.semantic-ui.com/images/avatar/large/matthew.png'} 
      circular  size="medium" />
    </Grid.Column>
    <Grid.Column width={9}>
     <h1>Welcome, {this.state.username}</h1>
     <Button animated secondary>
      <Button.Content visible>Change your Profile</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated secondary onClick={this.SignOut}>
      <Button.Content visible>SignOut</Button.Content>
      <Button.Content hidden>
        <Icon name='sign-out alternate ' />
      </Button.Content>
    </Button>
    </Grid.Column>
    <Grid.Column width={3}>
        <h2>Activity:</h2>
        <Feed>
    <Feed.Event>
      <Feed.Label>
        <img src={this.state.username.avatar? this.state.username.avatar.url : 'https://react.semantic-ui.com/images/avatar/large/matthew.png'}  />
      </Feed.Label>
      <Feed.Content>
        You added Elliot Fu to the group
      </Feed.Content>
    </Feed.Event>
    <Feed.Event>
      <Feed.Label>
        <img src={this.state.username.avatar? this.state.username.avatar.url : 'https://react.semantic-ui.com/images/avatar/large/matthew.png'}  />
      </Feed.Label>
      <Feed.Content>
        You added film to favorites
      </Feed.Content>
    </Feed.Event>
  </Feed>
    </Grid.Column>
  </Grid>
            )
        }
        
    }
export default Profile