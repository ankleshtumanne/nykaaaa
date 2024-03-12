import React, {  useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import SignIn from '../assets/SignIn.avif';
import './signup.css';
import { AuthContext } from '../../AuthContext/AuthContext';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {isAuth,setisAuth}=useContext(AuthContext)

  function handleSubmit(e) {
    e.preventDefault();
    const storedEmail = JSON.parse(localStorage.getItem('email'));
    const storedPassword = JSON.parse(localStorage.getItem("password"));

    if (email === storedEmail && password === storedPassword) {
      setisAuth(true)
      console.log("Login success");
      alert("Login Success")
      navigate("/");
      
      
    } else {
      setError("Invalid email or password. Please try again.");
    }
  }

  return (
    <>
      <div id='flex_container'>
        <div><img src={SignIn} alt="" /></div>
        <div id='design'>
          <div>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </div>
          <div><h1>Login!</h1></div>
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

export default Login;
