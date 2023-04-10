import React, { useEffect, useState } from 'react'
import './ResultsPageStyle.css';
function ResultsPage({ results }) {
    const [movies, setMovies] = useState();
    useEffect(() => {
        function movieSearch() {
            var requestOptions = {
                method: "GET",
                redirect: "follow",
            }
            fetch(
                `https://api.themoviedb.org/3/search/movie?query=${results}&api_key=8b8f208cf321ce6c5f01d462798b3b33`,
                requestOptions
            )
                .then((result) => result.json())
                .then((data) => {
                    setMovies(data.results)
                },);
        }
        movieSearch();
    }, [results]);
    return (
        <div >
            {/* {movies?.map((movie) => <SearchCards movie={movie} />)} */}
        </div >
    )
}

export default ResultsPage
