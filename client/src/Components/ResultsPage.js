import React, { useEffect, useState } from 'react'
import InnerNavBar from './InnerNavBar';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ResultsPageStyle.css';
function ResultsPage() {
    const { searchQuery } = useParams();
    const [results, setResults] = useState();
    useEffect(() => {
        function search() {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=8b8f208cf321ce6c5f01d462798b3b33&language=en-US&page=1&include_adult=false&query=${searchQuery}`)
                .then(res => res.json())
                .then(data => {
                    if (!data.errors) {
                        setResults(data.results);
                        console.log(setResults(data.results))
                    } else {
                        setResults([]);
                    }
                })
        }
        search()
    }, [searchQuery])
    return (
        <div>
            <InnerNavBar />
            <ul>
                {
                    results?.map((movie) => {
                        return (
                            <div className='resultContainer'>
                                <div className='resultCardContainer'>
                                    <div className='resultCardContent'>
                                        <div className='imageContainer'>
                                            <Link>
                                                <img
                                                    className='innerContentImage'
                                                    src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                                                    alt='' />
                                            </Link>
                                        </div>
                                        <div className='paragraphContainer'>
                                            <Link to={`/MovieDetails/${movie.id}/movie`}><h4> {movie.title} </h4></Link>
                                            <h6>{movie.release_date}</h6>
                                            <p>{movie.overview}</p>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ResultsPage
