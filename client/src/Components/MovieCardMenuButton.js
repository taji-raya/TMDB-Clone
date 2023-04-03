import React, { useContext } from 'react'
import { useState } from 'react'
import { WatchlistContext } from '../Context/WatchlistContext'
import './MovieCardMenuButtonStyle.css'
const MovieCardMenuButton = ({ movie }) => {
    const [open, setOpen] = useState(false);
    const [buttonText, setButtonText] = useState('Watchlist');
    const { addToWatchlist, watchlist } = useContext(WatchlistContext);
    let storedMovie = watchlist.find(o => o.id === movie.id);
    const watchlistDisabled = storedMovie ? true : false;
    return (
        <>
            <div className='menuButton'>
                <button onClick={() => setOpen(!open)} />
            </div>
            {
                open && (
                    <div className='dropdownMenu'>
                        <ul>
                            <div className='listItem'>
                                <li
                                    onClick={() => setOpen(false)}>
                                </li>
                                <li><button>Favorite </button></li>
                                <br />
                                <li>
                                    <button
                                        onClick={() => {
                                            addToWatchlist(movie)
                                            setButtonText('Added')
                                        }}
                                        disabled={watchlistDisabled}>
                                        {buttonText}</button></li>
                            </div>
                        </ul>
                    </div>
                )
            }


        </>
    )
}

export default MovieCardMenuButton
