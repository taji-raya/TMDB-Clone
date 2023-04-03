import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../Context/hooks/useLogout';
import { useAuthContext } from '../Context/hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import './InnerNavBarStyle.css';
function InnerNavBar() {
    const navigate = useNavigate();
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const handleClick = () => {
        logout();
        // navigate('/');
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
                        <li id='en'>EN</li>
                        <li>{user.email}</li>
                        <li id='logout'><button onClick={handleClick}>Logout</button></li>
                        <Link to='/Watchlist'><li>Watchlist</li> </Link>
                        <li id='logo'><button></button></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default InnerNavBar
