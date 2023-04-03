import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../Context/hooks/useAuthContext'
import NavBar from './NavBar'
import './LoginStyle.css'
function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();
    async function submit(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    password
                }),
            })
            const json = await response.json();
            if (!response.ok) {
                setIsLoading(false)
                setError(json.error)
            }
            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(json))
                dispatch({ type: 'LOGIN', payload: json })
                setIsLoading(false);
                navigate('/Home')
            }

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <NavBar />
            <div className='loginFormContainer'>
                <div className='formContainer'>
                    <form action='POST'>

                        <h1>Login  </h1>
                        <br />
                        <p> New to TMDB? register <Link to='/RegisterPage'>here</Link></p>
                        <br />
                        {error && <div className='error'><strong>{error}</strong></div>}

                        <input
                            id='email'
                            type='text'
                            name='email'
                            placeholder='Email'
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }} />

                        <br />
                        <input
                            id='password'
                            type='password'
                            name='password'
                            placeholder='Password'
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                        <input id='login_button'
                            disabled={isLoading}
                            type='submit'
                            value='Login'
                            onClick={submit} />
                    </form>
                </div>

            </div>

        </div>
    )
}
export default LoginPage;
