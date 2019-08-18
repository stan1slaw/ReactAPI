import React from 'react';
import './App.css';
import FilmList from './components/FilmList'
import Home from './components/Home'
import ActorsList from './components/ActorsList'
import {  Route,Link, BrowserRouter as Router } from 'react-router-dom'
import FilmShow from './components/FilmShow';
import {Menu, Segment} from 'semantic-ui-react'

class App extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Router>
        <Menu pointing secondary>
          <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} as={Link} to='/home' />
          <Menu.Item name='Actors'  active={activeItem === 'Actors'} onClick={this.handleItemClick} as={Link} to='/actors' />
          <Menu.Item name='Films' active={activeItem === 'Films'} onClick={this.handleItemClick} as={Link} to='/films' />
          <Menu.Menu position='right'>
            <Menu.Item
              name='Login'
              active={activeItem === 'Login'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

       
        
      
         <Route exact path="/" component={Home}/>
          <Route  path="/films" component={FilmList}/>
          <Route path="/actors" component={ActorsList}/>
          <Route path="/film/:id" component={FilmShow}/>

     </Router>
      </div>
    )
  }
}


export default App;
