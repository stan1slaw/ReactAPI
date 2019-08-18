import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
class Film extends React.Component {
    render() {
        let { film } = this.props
        return (
            <div className={`col-md-4 text-center`} style={{marginTop: '10px'}}>
                    <div className="img-thumbnail thumb-box">
                        <h3 className="text-center" style={{display: 'inline-block'}}>
                            <Link to={`/film/${film.id}`}>{film.name}</Link>
                        </h3>
                        <img src={film.avatars.url}  alt={film.name}  style={{height: 350, width: '90%'}}/>
                    </div>
            </div>
        )
    }
}
export default Film