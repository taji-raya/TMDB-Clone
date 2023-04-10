import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import Header from './Header';
import InnerNavBar from './InnerNavBar';
import PopularMovieDisplay from './PopularMovieDisplay';
import Footer from './Footer';

function Home({ setResults }) {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            if (!user) {
                localStorage.removeItem('token')
                navigate('/LoginPage')
            }
        }
    })

    return (
        <div>
            <InnerNavBar />
            <Header setResults={setResults} />
            <PopularMovieDisplay />
            <Footer />
        </div>
    )
}

export default Home
