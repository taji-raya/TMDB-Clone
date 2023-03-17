import React from 'react'
import './NavBarStyle.css'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <div className='mainContainer'>
            <div className='logoContainer'>
                <Link to='/'><img className='logo' alt=' Logo' src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' />
                </Link>
            </div>
            <div className='menuContainer'>
                <ul>
                    <li>EN</li>
                    <li><Link to='/LoginPage'><button><strong>Login </strong></button></Link></li>
                    <li><Link to='/RegisterPage'><button><strong>Join TMDB </strong></button></Link></li>
                    <li><button></button></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
