import React from 'react'
import jwtDecode from 'jwt-decode'
import '../App.css'
import ChangeForm from './ChangeForm'
import {Button, Icon, Grid, Image, Feed} from 'semantic-ui-react'
class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            isChanging: false
        }
        this.SignOut = this.SignOut.bind(this)
        this.ChangeProfile = this.ChangeProfile.bind(this)
    }
    
    SignOut() {
        window.localStorage.removeItem('jwt')
        this.props.history.push('/login')
    }
    ChangeProfile() {
        this.setState( prevState => ({
            isChanging: !prevState.isChanging
          }))
    }
    componentDidMount() {
        let jwt = window.localStorage.getItem('jwt');
        if (jwt) {
            let result = jwtDecode(jwt);
            this.setState({
                username: result.username
            })
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
     <Button animated secondary onClick={this.ChangeProfile}>
      <Button.Content visible>Change your Profile</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated secondary onClick={this.SignOut}>
      <Button.Content visible>SignOut</Button.Content>
      <Button.Content hidden>
        <Icon name="sign-out alternate" />
      </Button.Content>
    </Button>
    {this.state.isChanging ? <ChangeForm/> : ''}
    </Grid.Column>
    <Grid.Column width={3}>
        <h2>Activity:</h2>
        <Feed>
    <Feed.Event>
      <Feed.Label>
        <img alt="avatar" src={this.state.username.avatar? this.state.username.avatar.url : 'https://react.semantic-ui.com/images/avatar/large/matthew.png'}  />
      </Feed.Label>
      <Feed.Content>
        You added Elliot Fu to the group
      </Feed.Content>
    </Feed.Event>
    <Feed.Event>
      <Feed.Label>
        <img alt="avatar" src={this.state.username.avatar? this.state.username.avatar.url : 'https://react.semantic-ui.com/images/avatar/large/matthew.png'}  />
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