import { useRef, useState } from 'react'
import './MovieCardMenuButtonStyle.css'
const MovieCardMenuButton = ({ movie }) => {
    const [open, setOpen] = useState(false);
    const [buttonText, setButtonText] = useState('Watchlist');

    const buttonRef = useRef();
    const menuRef = useRef();

    // window.addEventListener("click", (e) => {
    //     if (e.target !== menuRef.current && e.target !== buttonRef.current) {
    //         setOpen(false);
    //     }
    // })


    const addToWatchList = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${user.token}`);
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "poster_path": movie.poster_path,
            "title": movie.title || movie.name,
            "release_date": movie.release_date || movie.first_air_date,
            "movieId": movie.id,
            "media_type": movie.media_type
        });
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch("http://localhost:8000/api/addToWatchList", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    };

    const addToWatchListFunctionality = () => {
        addToWatchList();
        setButtonText('Added to watchlsit');
    }


    return (
        <>
            <div ref={buttonRef} className='menuButton'>
                <button onClick={() => setOpen(!open)} />
            </div>
            {
                open && (
                    <div ref={menuRef} className='dropdownMenu'>
                        <ul>
                            <div className='listItem'>
                                <li
                                    onClick={() => setOpen(false)}>
                                </li>
                                <br />
                                <li>
                                    <button>
                                        Watched
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={addToWatchListFunctionality}>
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
