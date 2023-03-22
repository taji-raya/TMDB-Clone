import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import axios from 'axios'
import './RegisterStyle.css'

//, { state: { id: username } }

//DONT FORGET TO DO PASSWORD CONFIRMATION
function RegisterPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/RegisterPage', { username, password })
                .then(res => {
                    if (res.data === 'exists') {
                        alert('Username already exists. Please choose another username :)');
                    }// eslint-disable-next-line
                    else if (res.data === 'does not exist') {
                        alert('user created')
                        navigate('/Home')
                    }
                })
                .catch((e) => {
                    alert('Client error')
                    console.log(e)
                })
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
                        <input id='username'
                            type='text'
                            name='username'
                            placeholder='Username'
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                        />
                        <br />
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
                        <input id='email' type='text' name='email' placeholder='Email'></input>
                        <input id='register_button' type='submit' value='Register' onClick={submit} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
