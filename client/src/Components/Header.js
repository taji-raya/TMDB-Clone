import React from 'react'
import './HeaderStyle.css'
import SearchBar from './SearchBar'
function Header() {
    return (
        <div>
            <div className='headerContainer'>
                <div className='backgroundImage'>
                    <div>
                        <h1 className='heading'>Welcome!</h1>
                        <p className='sentence'>Millions of movies, TV shows and people to discover. Explore now.</p>
                    </div>
                    <div>
                        <SearchBar />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
