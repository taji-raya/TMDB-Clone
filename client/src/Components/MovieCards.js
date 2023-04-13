import React from 'react'
import { Link } from 'react-router-dom'
import MovieCardMenuButton from './MovieCardMenuButton'
import './MovieCardsStyle.css'
function MovieCards(props) {

    return (
        <div key={props.id} className='cardContainer'>
            <div className='menuButtonContainer'>
                <MovieCardMenuButton movie={props.movie} />
            </div>
            <Link to={`/MovieDetails/${props.id}/${props.mediaType}`}>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${props.img}`}
                    alt=''
                />
            </Link>
            <div>
                <Link to={`/MovieDetails/${props.id}/${props.mediaType}`}><h6>{props.name || props.title}</h6></Link>
                <h5>{props.release_date.substring(0, 4)}</h5>

            </div>
        </div>

    )
}

export default MovieCards
