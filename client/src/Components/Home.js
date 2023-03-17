import React from 'react'
import { useLocation } from 'react-router'
import InnerNavBar from './InnerNavBar';
//{location.state.id}
function Home() {
    const location = useLocation();
    return (
        <div>
            <InnerNavBar />
            <h1>Hello! Welcome to The Movie Database!</h1>
        </div>
    )
}

export default Home
