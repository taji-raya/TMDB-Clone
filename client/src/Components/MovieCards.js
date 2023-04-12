import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MovieCardMenuButton from './MovieCardMenuButton'
import './MovieCardsStyle.css'
function MovieCards(props) {
    // const [date, setDate] = useState([]);
    // useEffect(() => {
    //     const getDate = () => {
    //         fetch(`https://api.themoviedb.org/3/movie/${props.id}/release_dates?api_key=8b8f208cf321ce6c5f01d462798b3b33`)
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 console.log(data.results)
    //                 setDate(data.results)
    //             },);
    //     }
    //     getDate();
    // },
    //     [props.id])
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
            </div>
            <div >
                <h4>{props.vote_average}</h4>
            </div>
            <Link to={`/MovieDetails/${props.id}/${props.mediaType}`}><h6>{props.name || props.title}</h6></Link>
            <h5>{props.release_date.substring(0, 4)}</h5>
        </div>

    )
}

export default MovieCards
