import React from 'react'
import Header from './Header';
// import { useLocation } from 'react-router'
import InnerNavBar from './InnerNavBar';
import PopularMovieDisplay from './PopularMovieDisplay';
//{location.state.id}
function Home() {
    // const location = useLocation();
    return (
        <div>
            <InnerNavBar />
            <Header />
            <PopularMovieDisplay />
        </div>
    )
}

export default Home
