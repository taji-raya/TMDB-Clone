import { useEffect, useState } from 'react'
import MovieCards from './MovieCards'
import './PopularMovieDisplayStyle.css'

function PopularMovieDisplay() {
    const [movies, setMovies] = useState();
    useEffect(() => {
        const getMovie = () => {
            fetch('https://api.themoviedb.org/3/movie/popular?api_key=8b8f208cf321ce6c5f01d462798b3b33')
                .then((res) => res.json())
                .then((data) => {
                    setMovies(data.results)
                },);
        }
        getMovie();
    },
        [])
    return (
        <>
            <div className='trendingText'>
                <h4>Trending</h4>
            </div>
            <div className='carousel'>
                <div className='innerCarousel'>
                    {movies?.map((movieList) => (
                        <div key={movieList.id} className='item'>
                            <MovieCards
                                id={movieList.id}
                                title={movieList.title}
                                img={movieList.poster_path}
                                release_date={movieList.release_date}
                                vote_average={movieList.vote_average}
                            />
                        </div>
                    ))}

                </div>
            </div>

        </>
    )
}

export default PopularMovieDisplay
