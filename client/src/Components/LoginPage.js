import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import './LoginStyle.css'
function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function submit(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                }),
            })
            const data = await response.json()
            if (data.user) {
                localStorage.setItem('token', data.user)
                navigate('/Home')
            }
            else if (!data.user) {
                alert('wrong credentials')
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
                            type='submit'
                            value='Login'
                            onClick={submit} />
                    </form>
                    {/* <Link to='/Home'> <button>HOME</button></Link> */}
                </div>

            </div>

        </div>
    )
}
export default LoginPage;
