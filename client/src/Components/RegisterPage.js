import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../Context/hooks/useAuthContext'
import NavBar from './NavBar'
import './RegisterStyle.css'

//DONT FORGET TO DO PASSWORD CONFIRMATION
function RegisterPage() {
    // const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    async function submit(e) {
        e.preventDefault();
        setIsLoading(true)
        setError(null)
        try {
            const response = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username,
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
            }

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <NavBar />
            <div className='registerFormContainer'>
                <div className='formContainer'>
                    <form action='POST'>
                        <h1> Create a new account </h1>
                        <br />
                        <p> Already a user?  <Link to='/LoginPage'> Login here</Link></p>
                        <br />
                        {error && <div className='error'><strong>{error}</strong></div>}
                        <input id='username'
                            type='text'
                            name='username'
                            placeholder='Name'
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                        />
                        <br />
                        <input id='email'
                            type='email'
                            name='email'
                            placeholder='Email'
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                        <input id='password'
                            type='password'
                            name='password'
                            placeholder='Password'
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }} />

                        <br />
                        <input id='confirmPassword' type='password' name='confirmPassword' placeholder='STILL WORKING ON PASSWORD CONFIRMATION' />
                        <br />

                        <input disabled={isLoading} id='register_button' type='submit' value='Register' onClick={submit} />

                    </form>
                </div>
            </div>
        </div >
    )
}

export default RegisterPage
