import React, { useState } from 'react';
import axios from '../../axios-order';
import Router from 'next/router';
import Navbar from '../../components/Navbar/Navbar';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = event => setUsername(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      username,
      password,
    };
    axios
      .post('/login', data)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        Router.push('/campgrounds');
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <div style={{ width: '30%', margin: '25px auto' }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
