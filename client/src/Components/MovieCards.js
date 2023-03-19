import React from 'react'
import { Link } from 'react-router-dom'
import MovieCardMenuButton from './MovieCardMenuButton'
import './MovieCardsStyle.css'

function MovieCards(props) {
    return (
        <div key={props.id} className='cardContainer'>
            <div className='menuButtonContainer'>
                <MovieCardMenuButton />
            </div>
            <Link to={`/MovieDetails/${props.id}`}>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${props.img}`}
                    alt=''
                />
            </Link>
            <div>
            </div>
            <div >
                <h4>{props.vote_average}</h4>
            </div>
            <Link to={`/MovieDetails/${props.id}`}><h6>{props.title}</h6></Link>
        </div>

    )
}

export default MovieCards
