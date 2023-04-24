import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SearchBarStyle.css';
function SearchBar() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const onSubmitSearch = (e) => {
        e.preventDefault();
        navigate(`/ResultsPage/${query}`)

    }
    return (
        <div>
            <form onSubmit={onSubmitSearch}>
                <div className='searchBarContainer'>
                    <input
                        className='searchBar'
                        type='textarea'
                        placeholder='Search for a movie, tv show, person...'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
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
