import React from 'react'
import './SearchBarStyle.css';
function SearchBar() {
    return (
        <div>
            <form >
                <div className='searchBarContainer'>
                    <input
                        className='searchBar'
                        type='textarea'
                        placeholder='Search for a movie, tv show, person...'
                    />
                    <div>
                        <input type='submit' value='Search' className='submitButton'
                        />
                    </div>
                </div>
            </form >

        </div>
    )
}

export default SearchBar
