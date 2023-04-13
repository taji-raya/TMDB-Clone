import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InnerNavBar from './InnerNavBar';
// import { GlobalContext } from '../Context/GlobalContext'
import Tooltip from './Tooltip';
import './MovieDetailsStyle.css'
import { FaHeart, FaList } from 'react-icons/fa';
function MovieDetails() {
    const [selectedMovie, setSelectedMovie] = useState('');
    const { movieID, mediaType } = useParams();
    useEffect(() => {
        const getMovie = () => {
            fetch(
                `https://api.themoviedb.org/3/${mediaType}/${movieID}?api_key=8b8f208cf321ce6c5f01d462798b3b33`)
                .then((res) => res.json())
                .then((data) => {
                    setSelectedMovie(data);
                }
                );
        }
        getMovie();
    },
        [mediaType, movieID])

    // const addToWatchList = async () => {
    //     const user = JSON.parse(localStorage.getItem("user"));
    //     const myHeaders = new Headers();
    //     myHeaders.append("Authorization", `Bearer ${user.token}`);
    //     myHeaders.append("Content-Type", "application/json");
    //     const raw = JSON.stringify({
    //         "poster_path": selectedMovie.poster_path,
    //         "title": selectedMovie.title || selectedMovie.name,
    //         "release_date": selectedMovie.release_date || selectedMovie.first_air_date,
    //         "movieId": selectedMovie.id,
    //         "media_type": selectedMovie.media_type
    //     });
    //     const requestOptions = {
    //         method: "POST",
    //         headers: myHeaders,
    //         body: raw,
    //         redirect: "follow",
    //     };

    //     fetch("http://localhost:8000/api/addToWatchList", requestOptions)
    //         .then((response) => response.text())
    //         .then((result) => console.log(result))
    //         .catch((error) => console.log("error", error));
    // };
    // const addToWatchListFunctionality = () => {
    //     addToWatchList();
    // }
    return (
        <>
            <InnerNavBar />
            <div className='infoContainer'>
                {/* <div className='detailsBackgroundImage'>
                    <img id='coverImage' src={`https://image.tmdb.org/t/p/w1280/${selectedMovie.backdrop_path}`}
                        alt=''
                    />
                </div> */}
                <div>
                    <img
                        className='innerContentImage'
                        src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
                        alt=''
                    />
                </div>
                <div className='innerInfoContainer'>
                    <h1>{selectedMovie.title || selectedMovie.name}</h1>
                    <div className='buttonContainer'>
                        <button id='vote'>{selectedMovie.vote_average}</button>
                        <button id='favorite'><FaHeart /> </button>
                        <Tooltip text={'Add to watchlist'} >
                            <button id='watchlist'
                                // onClick={addToWatchListFunctionality}
                            > <FaList />
                            </button>
                        </Tooltip>
                    </div>
                    <h4>Overview</h4>
                    <p>{selectedMovie.overview}</p>
                </div>

            </div>

        </>
    )
}

export default MovieDetails
