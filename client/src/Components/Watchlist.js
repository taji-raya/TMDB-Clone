import React, { useContext } from 'react'
import { WatchlistContext } from '../Context/WatchlistContext';
import InnerNavBar from './InnerNavBar'
import WatchlistMovieCard from './WatchlistMovieCard';
import './WatchlistStyle.css';
function Watchlist() {
    const { watchlist } = useContext(WatchlistContext);
    return (
        <>
            <InnerNavBar />
            {watchlist.length > 0 ? (
                <div>
                    {watchlist.map(movie => (<WatchlistMovieCard
                        movie={movie} type='watchlist'
                    />))}
                </div>
            ) : (<h2>No movies added to watchlist</h2>)}

        </>
    )
}

export default Watchlist
