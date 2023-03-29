import React from 'react'
import NavBar from './NavBar'
import './LandingStyle.css'
import { Outlet } from 'react-router'
function Landing() {
    return (
        <div>
            <NavBar />
            <h1>Welcome to The Movie Database!</h1>
            <h3>Sign in or create an account to continue</h3>
            <Outlet />

        </div>
    )
}

export default Landing
