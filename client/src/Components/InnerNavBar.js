import React from 'react'
import { Link } from 'react-router-dom'
import './InnerNavBarStyle.css';
function InnerNavBar() {
    return (
        <>
            <div className='innerMainContainer'>
                <div className='innerLogoContainer'>
                    <Link to='/Home'><img className='logo' alt=' Logo' src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' />
                    </Link>
                </div>
                <div className='innerMenuContainer'>
                    <ul>
                        <li id='en'>EN</li>
                        <li>USER</li>
                        <Link to='/LoginPage'><li id='logout'>Logout</li></Link>
                        <Link to='/Watchlist'><li>Watchlist</li> </Link>
                        <li id='logo'><button></button></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default InnerNavBar
