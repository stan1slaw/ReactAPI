import React from 'react'
import '../App.css'
import { Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react'
import {Link,  Redirect} from 'react-router-dom'
class  Login extends React.Component {
constructor() {
    super()
    this.state = {}
}
    handleSubmit = event => {
        event.preventDefault();
        let formData = new FormData();
        formData.append("username",this.inputNode1.value);
        formData.append("password",this.inputNode2.value);

        fetch("https://salty-basin-57911.herokuapp.com/api/tokens", 
        {method: 'POST', body: formData })
        .then(res => res.json())
        .then(res => window.localStorage.setItem('jwt', res.jwt))
        .then(() => this.props.history.push('/profile'))
        .catch(errors => this.setState({errors: errors}))
        
    }

    render() {
        if (localStorage.getItem('jwt')) {
            return <Redirect to={{pathname: '/profile', state: {from: this.props.location}}} />
        }
        else {
            return (
                
                <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                  <Header as='h2' color='teal' textAlign='center'>
                    Log-in to your account
                  </Header>
                  <Form size='large' onSubmit={this.handleSubmit}>
                    <Segment stacked>
                    <input type="text" id="username" name="username" ref={node => {this.inputNode1 = node}} className="form-login" placeholder="Username"/>
                    <input type="password" id="password" name="password" ref={node => {this.inputNode2 = node}} className="form-login" placeholder="Password"/>
                      <Button color='teal' fluid size='large'>
                        Login
                      </Button>
                    </Segment>
                  </Form>
                   {this.state.errors ?
                     <Message  color="red">Wrong data :(</Message> 
                    : <Message as={Link} to="/signup" color="teal">New to us? </Message> }
                </Grid.Column>
               
              </Grid>
            )
        }
         
    }
} 
export default Login;   