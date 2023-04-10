import React from 'react'
import { useState } from 'react'
import './MovieCardMenuButtonStyle.css'
const MovieCardMenuButton = ({ movie }) => {
    const [open, setOpen] = useState(false);
    const [buttonText, setButtonText] = useState('Watchlist');
    var token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({ movie: movie }),
        redirect: "follow",
    };

    const addToWatchList = () => {
        fetch("http://localhost:8000/api/addToWatchList", requestOptions)
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    };

    const addToWatchListFunctionality = () => {
        addToWatchList();
        setButtonText('Added to watchlsit');
    }
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
                                <br />
                                <li>
                                    <button
                                        onClick={addToWatchListFunctionality}
                                    // disabled={addToWatchList}
                                    >
                                        {buttonText}
                                    </button>
                                </li>
                            </div>
                        </ul>
                    </div>
                )
            }
        </>
    )
}

export default MovieCardMenuButton
