import React from 'react'
import '../App.css'
import {Form, Input,Select, TextArea, Button} from 'semantic-ui-react'
class ChangeForm extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            firstname: "",
            lastname: "",
            gender: "",
            description: ""

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit = event =>{
        event.preventDefault();
        
        }

    handleChange = event =>{
        this.setState({ [event.target.name]:event.target.value })
        }

    render() {
        const genderOptions = [
            { key: 'm', text: 'Male', value: 'male' },
            { key: 'f', text: 'Female', value: 'female' },
            { key: 'o', text: 'Other', value: 'other' },
          ]

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
               
              />
              <Form.Field
                onChange={this.handleChange}
                name="lastname"
                id='form-input-control-last-name'
                control={Input}
                label='Last name'
                placeholder='Last name'
                
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
            />
             <Form.Field
              name="username"
              onChange={this.handleChange}
              id='form-textarea-control-username'
              control={Input}
              label='Username'
              placeholder='Username'
              required={true}
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