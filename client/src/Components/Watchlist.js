import React, { useState, useEffect } from 'react'
import InnerNavBar from './InnerNavBar'
import WatchlistMovieCard from './WatchlistMovieCard';
import './WatchlistStyle.css';
function Watchlist() {
    const [watchlist, setWatchlist] = useState([])
    useEffect(() => {
        function getWatchList() {
            const user = JSON.parse(localStorage.getItem("user"));
            const myHeaders = new Headers();
            myHeaders.append("authorization", `Bearer ${user.token}`);
            myHeaders.append("Content-Type", "application/json");
            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow",
            };
            fetch("http://localhost:8000/api/Watchlist", requestOptions)
                .then((response) => response.json())
                .then((result) => setWatchlist(result))
                .catch((error) => console.log("error", error));
        }
        getWatchList();
    }, [])
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
