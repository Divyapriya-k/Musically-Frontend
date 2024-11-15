import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Check if the username and password match the placeholder values
      if ((username === 'user' || email === 'user@gmail.com') && password === 'password') {
        // Login successful, redirect to protected route
        window.location.href = '/protected';
      } else {
        setError('Invalid username or email or password');
      }
    } catch (error) {
      setError('An error occurred during login');
    }
  };

  return (
    <div class="text-center justify-center text-xl font-bold text-blue-900 text-wrap">
      <h1></h1>
      <form onSubmit={handleSubmit}>
        <label class="md:mr-4 ">
          Username:&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <br /><br/>
        <label>
          Email:&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br /><br/>
        <label>
          Password:&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br /><br/>
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form><br/>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default LoginPage;