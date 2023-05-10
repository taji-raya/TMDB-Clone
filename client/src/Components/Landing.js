import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import './LandingStyle.css'
import { Outlet } from 'react-router'
function Landing() {
    return (
        <div className='landingMainContainer'>
            <NavBar />
            <div className='landingImage'>
                <div className='titleContainer'>
                    <h1>Welcome to The Movie Database!</h1>
                    <h3>Sign in or Join TMDB to get started.</h3>
                    <Link to='/LoginPage'> <button><strong> Get Started</strong></button></Link>
                </div>
                <div className='hi'></div>
            </div>
            <Outlet />
        </div>
    )
}

export default Landing
