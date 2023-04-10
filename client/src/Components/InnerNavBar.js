import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../Context/hooks/useLogout';
import { useAuthContext } from '../Context/hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import './InnerNavBarStyle.css';
function InnerNavBar() {
    const navigate = useNavigate();
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([])
    const handleClick = () => {
        logout();
        navigate('/');
    }
    const openMenu = () => {
        setOpen(!open)
    }
    const onChange = (e) => {
        const searchedQuery = e.target.value;
        e.preventDefault();
        setQuery(searchedQuery);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=8b8f208cf321ce6c5f01d462798b3b33&language=en-US&include_adult=false&query=${searchedQuery}`)
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    setResults(data.results.map((r) => {
                        r["mediaType"] = "movie"
                        return r
                    }));
                } else {
                    setResults([]);
                }
            })
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=8b8f208cf321ce6c5f01d462798b3b33&language=en-US&page=1&query=${searchedQuery}&include_adult=false`)
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    setResults([...results, ...data.results.map((r) => {
                        r['mediaType'] = 'tv'
                        return r
                    })]);
                } else {
                    setResults([]);
                }
            })
    }
    return (
        <>
            <div className='innerMainContainer'>
                <div className='innerLogoContainer'>
                    <Link to='/Home'><img className='logo' alt=' Logo' src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' />
                    </Link>
                </div>
                <div className='innerMenuContainer'>
                    <ul>
                        <li id='en'><button>EN </button></li>
                        <li>{user?.email}</li>
                        <li id='logout'><button onClick={handleClick}>Logout</button></li>
                        <Link to='/Watchlist'><button> <li>Watchlist</li></button> </Link>
                        <div className='searchIcon'>
                            <li id='logo' onClick={openMenu}><button></button></li>
                        </div>
                        {
                            open && (
                                <div className='innerSearchBarContainer'>
                                    <div className='innerSearchBar'>
                                        <input id='search'
                                            type='search'
                                            name='search'
                                            placeholder='Search...'
                                            value={query}
                                            onChange={onChange} />
                                    </div>
                                    <div className='innerSearchBarResults'>
                                        {
                                            results.map((result, i) => {
                                                return <div key={i}><Link to={`/MovieDetails/${result.id}/${result.mediaType}`}>{result.title || result.name}</Link></div>
                                            })
                                        }

                                    </div>
                                </div>
                            )
                        }

                    </ul>
                </div>
            </div>
        </>
    )
}

export default InnerNavBar
