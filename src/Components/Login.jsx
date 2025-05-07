import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: '',
    userPassword: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.get('http://localhost:8758/user/get/' + user.userName);
      const userData = response.data;

      if (userData && userData.userPassword === user.userPassword) {
        navigate('/userpage', { state: { username: user.userName } }); // navigate to userpage with username as state
      } else {
        alert('Please enter the correct username and password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error during login. Please try again.');
    }
  };

  return (
    <div className='container p-3 m-5' style={{ border: '2px solid gray' }}>
      <h1 className="text-center">LogIn to Your Account</h1>
      <form onSubmit={handleSubmit} className='text-center d-inline align-items-center'>
        <label htmlFor="userName" className="form-label">Enter UserName : </label>
        <input
          type="text"
          placeholder="UserName"
          className="form-control"
          autoComplete='off'
          name="userName"
          value={user.userName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="userPassword" className="form-label">Enter Password : </label>
        <input
          type="password"
          className="form-control "
          autoComplete='off'
          placeholder="UserPassword"
          name="userPassword"
          value={user.userPassword}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          value="Login"
          className="b1 "
          style={{ width: "45%" }}
        />
        <button type="button" onClick={handleRegister} className='b2' style={{ width: "45%" }}>Register</button>
      </form>
    </div>
  );
}
