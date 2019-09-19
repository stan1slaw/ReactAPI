import React from 'react'
import '../App.css'
import {Form, Input,Select, TextArea, Button} from 'semantic-ui-react'

class ChangeForm extends React.Component {
    constructor(props) {
        super()
        this.state = {
            username: props.user.username || '',
            firstname:props.user.firstname|| '',
            lastname: props.user.lastname|| '',
            gender: props.user.gender || '',
            description: props.user.description || ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
       
    }
    
    handleSubmit = event =>{
      event.preventDefault();
        const data = {
             username:this.state.username, 
             lastname:this.state.lastname,
             firstname:this.state.firstname,
             description:this.state.description,
             gender:this.state.gender
        }
        fetch(`http://localhost:3001/api/users/${this.props.user.id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers:{'Content-Type':'application/json'}})
        .then(res=> res.json())
        .catch(error => console.log(error))
        this.props.afterSubmit()
        
    }

    handleChange = event => {
        this.setState({ [event.target.name]:event.target.value })
        }

    componentWillReceiveProps(props) {
       this.setState(props);
    }
    
    render() {
        const genderOptions = [
            { key: 'm', text: 'Male', value: 'male' },
            { key: 'f', text: 'Female', value: 'female' },
            { key: 'o', text: 'Other', value: 'other' },
          ]
          const {username, lastname, gender, firstname, description} = this.state
   
        return (
            
            <Form onSubmit={this.handleSubmit}>
                <br></br>
            <Form.Group widths='equal'>

              <Form.Field
               onChange={this.handleChange}
                id='form-input-control-first-name'
                control={Input}
                label='First name'
                name="firstname"
                placeholder='First name'
                value={firstname}
              />
              <Form.Field
                onChange={this.handleChange}
                name="lastname"
                id='form-input-control-last-name'
                control={Input}
                label='Last name'
                placeholder='Last name'
                value={lastname}
              />
              <Form.Field
                name="gender"
                onChange={this.handleChange}
                control={Select}
                options={genderOptions}
                label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
                placeholder='Gender'
                search
                searchInput={{ id: 'form-select-control-gender' }}
                value = {gender}
              />
            </Form.Group>

            <Form.Field
              name="description"
              onChange={this.handleChange}
              id='form-textarea-control-about'
              control={TextArea}
              label='About'
              placeholder='About'
              required={true}
              value={description}
            />
             <Form.Field
              name="username"
              onChange={this.handleChange}
              id='form-textarea-control-username'
              control={Input}
              label='Username'
              placeholder='Username'
              required={true}
              value={username}
            />
            <Form.Field
              id='form-button-control-public'
              control={Button}
              content='Confirm'
            />
          </Form>
        )
    }

}
export default ChangeForm