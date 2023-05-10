import React from 'react'
import { Link } from 'react-router-dom';
import './WatchlistMovieCardStyle.css'

function WatchlistMovieCard({ movie, getNewWatchList }) {
    const handleDelete = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        const myHeaders = new Headers();

        myHeaders.append("Authorization", `Bearer ${user.token}`);
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(`http://localhost:8000/api/Movie/${movie.movieId}`, requestOptions)
            .then(response => response.text())
            .then(result => { console.log(result); getNewWatchList() })
            .catch(error => console.log('error', error));
    }
    return (
        <div className='movieContainer'>
            <div className='movieCard'>
                <img className='movieImage' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt='' />
                <Link to={`/MovieDetails/${movie.movieId}/${movie.media_type}`}><h3>{movie.title || movie.name}</h3></Link>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default WatchlistMovieCard
