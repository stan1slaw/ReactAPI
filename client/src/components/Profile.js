import React from 'react'
import jwtDecode from 'jwt-decode'
import '../App.css'
import ChangeForm from './ChangeForm'
import {Button, Icon, Grid, Image, Feed, Dimmer, Loader} from 'semantic-ui-react'
class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            id: jwtDecode(window.localStorage.getItem('jwt')).id,
            isChanging: false,
            isLoading: true,
            user: {
              username: '',
              firstname: '',
              lastname: '',
              avatar: '',
              description: ''
            }
        }
       
        this.SignOut = this.SignOut.bind(this)
        this.ChangeProfile = this.ChangeProfile.bind(this)
        this.afterSubmit = this.afterSubmit.bind(this)
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
            fetch(`/api/users/${this.state.id}`)
            .then(response => response.json())
            .then(jsonStr => {
              this.setState({user: jsonStr[this.state.id - 1]});
            })
    }
    afterSubmit() {
      this.props.history.push('/')
    }
    render() {
    
        const {isFetching, user} = this.state
        const {username, lastname, description, gender, avatar, firstname} = user
       if  (isFetching) return  <div>
    <Dimmer active inverted>
      <Loader inverted>Loading</Loader>
    </Dimmer>
       </div>  

            return (
             
                <Grid>
                     <Grid.Column width={1}></Grid.Column>
    <Grid.Column width={3}>
      <Image src={'https://react.semantic-ui.com/images/avatar/large/matthew.png'} 
      circular  size="medium" />
     
    </Grid.Column>
    <Grid.Column width={9}>
     <h1>Welcome, {username || firstname + '' + lastname}</h1>
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
    {this.state.isChanging ? <ChangeForm user={this.state.user} afterSubmit={this.afterSubmit} /> : ''}
    </Grid.Column>
    <Grid.Column width={3}>
        <h2>Activity:</h2>
        <Feed>
    <Feed.Event>
      <Feed.Label>
        <img alt="avatar"  src='https://react.semantic-ui.com/images/avatar/large/matthew.png'  />
      </Feed.Label>
      <Feed.Content>
        You added Elliot Fu to the group
      </Feed.Content>
    </Feed.Event>
    <Feed.Event>
      <Feed.Label>
        <img alt="avatar"  src='https://react.semantic-ui.com/images/avatar/large/matthew.png'  />
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