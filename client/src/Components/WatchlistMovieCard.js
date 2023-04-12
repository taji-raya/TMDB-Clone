import React, { useContext } from 'react'
// import { WatchlistContext } from '../Context/WatchlistContext';
import { Link } from 'react-router-dom';
import './WatchlistMovieCardStyle.css'

function WatchlistMovieCard({ movie, type }) {
    // const { removeFromWatchlist } = useContext(WatchlistContext);
    return (
        <div className='movieContainer'>
            <div className='movieCard'>
                <img className='movieImage' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt='' />
                <Link to={`/MovieDetails/${movie.id}/${movie.mediaType}`}><h3>{movie.title || movie.name}</h3></Link>
                <button onClick={() => {
                    // removeFromWatchlist(movie.id)
                }}>Delete</button>
            </div>
        </div>
    )
}

export default WatchlistMovieCard
