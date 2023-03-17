import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavBar from './NavBar'
import './LoginStyle.css'
function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/LoginPage',
                username, password
            )
                .then(res => { // eslint-disable-next-line
                    if (res.data === 'exist') {
                        navigate('/Home', { state: { id: username } });// eslint-disable-next-line
                    }
                    else if (res.data === 'does not exist') {
                        alert('User does not exist. Register >:(');
                    }
                })
                .catch((e) => {
                    alert('Wrong username or password!')
                    console.log(e)

                })
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
                        <p>   New to TMDB? register <Link to='/RegisterPage'>here</Link></p>
                        <br />
                        <input
                            id='username'
                            type='text'
                            name='username'
                            placeholder='Username'
                            onChange={(e) => {
                                setUsername(e.target.value)
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
                </div>

            </div>

        </div>
    )
}
export default LoginPage;