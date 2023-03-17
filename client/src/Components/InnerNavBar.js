import React from 'react'
import { Link } from 'react-router-dom'

function InnerNavBar() {
    return (
        <>
            <div className='navbarContainer'>
                <Link to="/Home">
                    <img className='logo' alt=' Logo' src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' />
                </Link>
                <div>
                    <ul id='ulList'>
                        <li>
                            <button id='EN'>EN</button>
                        </li>

                        <li>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default InnerNavBar
