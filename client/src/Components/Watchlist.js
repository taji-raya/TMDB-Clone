import React from 'react'
import InnerNavBar from './InnerNavBar'
import './WatchlistStyle.css';

function Watchlist() {
    return (
        <div>
            <InnerNavBar />
            <ul>
                <li>Movie1</li>
                <li>Movie2</li>
            </ul>

        </div>
    )
}

export default Watchlist
