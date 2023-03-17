import React from 'react'
import NavBar from './NavBar'
import './LandingStyle.css'
import { Outlet } from 'react-router'
function Landing() {
    return (
        <div>
            <NavBar />
            <h1>Welcome to The Movie Database!</h1>
            <Outlet />

        </div>
    )
}

export default Landing
