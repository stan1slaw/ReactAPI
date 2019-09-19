import React from 'react'
import '../App.css'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router';
class Login extends React.Component {
constructor() {
  super()
  this.state = {
    data: ''
  }
}
  handleSubmit = event => {
    event.preventDefault();
    let formData =  new FormData();
    formData.append("username",this.inputNode1.value);
    formData.append("password",this.inputNode2.value);

    fetch("http://localhost:3001/api/users",
    {method: 'POST', body: formData })
    .then(res => res.json())
    .then(res => {
      if (res.status !== 4000) {
        this.setState({data: res})
      }
      else {
        this.props.history.push('/login')
      }
    })
    .catch(errors => console.log(errors))

  }

  render() {
    const { message } = this.state.data
    return (
     
      <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
         Create your account!
        </Header>
        <Form size='large' onSubmit={this.handleSubmit}>
          <Segment stacked>
          <input type="text" id="username" name="username" ref={node => {this.inputNode1 = node}} className="form-login" placeholder="Username"/>
          <input type="password" id="password" name="password" ref={node => {this.inputNode2 = node}} className="form-login" placeholder="Password"/>
            <Button color='teal' fluid size='large'>
              Sign Up
            </Button>
          </Segment>
        </Form>
            {message?
            <Message color="red" >
           Error,username has lower then 3 symbol or {message}
          </Message>
             :  <Message as={Link} to="/login" color="teal">
             Did you have account?
           </Message>
        }
      </Grid.Column>
     
    </Grid>
  )
  }
} 
export default withRouter(Login);   