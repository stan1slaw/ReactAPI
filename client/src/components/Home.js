import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const Home = () => {
    return (
            <div  className="text-center film_main_p">
            <p> 
            A video portal is a service that has all the information about films, the date of the premier, the directors, 
            the actors, you can create accounts and watch movies that you like. <Link to="/films" className="btn btn-success film_main_button">Let's go</Link>
            </p>
            </div>
    )
}
export default Home