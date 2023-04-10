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
    // const { addToWatchlist, watchlist } = useContext(GlobalContext);
    // let storedMovie = watchlist.find(o => o.id === movie.id);
    // const watchlistDisabled = storedMovie ? true : false;
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
                                // onClick={() => {
                                //     addToWatchlist(movie)
                                //     console.log('Added to watchlist')
                                // }}
                                // disabled={watchlistDisabled}
                            ><FaList /></button>
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
