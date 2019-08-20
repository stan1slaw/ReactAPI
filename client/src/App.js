import React from 'react';
import './App.css';
import FilmList from './components/FilmList'
import Home from './components/Home'
import ActorsList from './components/ActorsList'
import {  Route,Link, BrowserRouter as Router } from 'react-router-dom'
import FilmShow from './components/FilmShow';
import Login from './components/Login'
import {Menu, Icon} from 'semantic-ui-react'
import SignUp from './components/SignUp'
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile'
class App extends React.Component {

  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Router>
        <Menu pointing secondary>
            <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} as={Link} to='/' />
            <Menu.Item name='Actors'  active={activeItem === 'Actors'} onClick={this.handleItemClick} as={Link} to='/actors' />
            <Menu.Item name='Films' active={activeItem === 'Films'} onClick={this.handleItemClick} as={Link} to='/films' />
          <Menu.Menu position='right'>
            <Menu.Item name='Profile' active={activeItem === 'Profile'} onClick={this.handleItemClick} as={Link} to='/login'>
            <Icon name='home' size='large' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

          <Route exact path="/" component={Home}/>
          <Route  path="/films" component={FilmList}/>
          <Route path="/actors" component={ActorsList}/>
          <Route path="/film/:id" component={FilmShow}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute component={Profile} path="/profile" exact/>
          <Route path="/signup" render={() => <SignUp/>}/>
        </Router>
      </div>
    )
  }
}


export default App;
