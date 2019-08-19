import React from 'react'
import jwtDecode from 'jwt-decode'
class Profile extends React.Component {
    constructor() {
        super();
    
        this.state = {
            username: ''
        }
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
                <h1>Hello, {this.state.username}</h1>
            )
        }
        
    }
export default Profile