import { useState } from 'react'
import './SearchBarStyle.css';
function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const onChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=8b8f208cf321ce6c5f01d462798b3b33&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
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
                        <input type='submit' value='Search' className='submitButton' />
                    </div>
                </div>
            </form >

        </div>
    )
}

export default SearchBar
