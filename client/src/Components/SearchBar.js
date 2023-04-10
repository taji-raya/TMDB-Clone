import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SearchBarStyle.css';
function SearchBar({ setResults }) {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const onChange = (e) => {
        const searchedQuery = e.target.value
        e.preventDefault();
        setQuery(searchedQuery);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=8b8f208cf321ce6c5f01d462798b3b33&language=en-US&page=1&include_adult=false&query=${searchedQuery}`)
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    setResults(data.results);
                } else {
                    setResults([]);
                }
            })
    }
    return (
        <div>
            <form >
                <div className='searchBarContainer'>
                    <input
                        className='searchBar'
                        type='textarea'
                        placeholder='Search for a movie, tv show, person...'
                        value={query}
                        onChange={onChange}
                    />
                    <div>
                        <input type='submit' value='Search' className='submitButton' onClick={() => {
                            navigate('/ResultsPage');
                        }} />
                    </div>
                </div>
            </form >

        </div>
    )
}

export default SearchBar
