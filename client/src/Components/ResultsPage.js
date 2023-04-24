import React, { useEffect, useState } from 'react'
import InnerNavBar from './InnerNavBar';
import { useParams } from 'react-router';
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
                    } else {
                        setResults([]);
                    }
                })
        }
        search()
    }, [searchQuery])
    console.log(results)
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
                                        <button>Add to watchlist</button>
                                        <h4> {movie.title} </h4>
                                        <div>
                                            <img
                                                className='innerContentImage'
                                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                                alt=''
                                            />
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
