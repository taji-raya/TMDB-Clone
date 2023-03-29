import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import './RegisterStyle.css'

//, { state: { id: username } }

//DONT FORGET TO DO PASSWORD CONFIRMATION
function RegisterPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                }),
            })
            const data = await response.json();
            if (!email || !password || !username) {
                alert('Please fill in all the fields');
            }
            else if (data.status === 'ok') {
                navigate('/LoginPage')
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
                        <input id='username'
                            type='text'
                            name='username'
                            placeholder='Name'
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                        />
                        <br />
                        <input input id='email'
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

                        <input id='register_button' type='submit' value='Register' onClick={submit} />
                    </form>
                </div>
            </div>
        </div >
    )
}

export default RegisterPage
