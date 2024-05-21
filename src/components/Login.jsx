import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css'; 

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'nahas' && password === '12345678') {
      toast.success('Successfully Logged In.');
      navigate('/home');
    } else {
      toast.error('Incorrect username or password.');
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="login-container">
        <div className="left-section"></div>
        <div className="right-section">
          <div className="login-card">
            <h2 className="text-center">Login</h2>
            <form className="p-4">
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="form-control mb-3"
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="form-control"
              />
            </form>
            <div className="text-center">
              <button className="btn btn-dark" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
