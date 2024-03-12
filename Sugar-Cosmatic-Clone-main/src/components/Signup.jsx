import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import SignIn from '../assets/SignIn.avif';
import './signup.css';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate=useNavigate()

    function handleSubmit(e) {
        e.preventDefault();

        // Basic form validation
        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        // More advanced form validation can be added here

        // Storing email and password in local storage
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('password', JSON.stringify(password));

        // Feedback to user upon successful signup
        alert("Signup successful!");

        // Optional: Redirect to login page
        navigate("/login")
        // history.push('/login');
    }

    return (
        <>
            <div id='flex_container'>
                <div><img src={SignIn} alt="" /></div>
                <div id='design'>
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                    <div><h1>Sign Up!</h1></div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input type="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <br />
                            <br />
                            <label htmlFor="password">Password: </label>
                            <input type="password" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <Button colorScheme='blue' type="submit">Submit</Button>
                        {error && <div className="error">{error}</div>}
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;
