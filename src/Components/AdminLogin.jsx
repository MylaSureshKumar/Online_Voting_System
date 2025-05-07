import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    adminName: '',
    adminPassword: '',
  });

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if adminName and adminPassword match the hardcoded values
    if (admin.adminName === 'admin' && admin.adminPassword === 'admin') {
      // Credentials are correct, navigate to admin dashboard
      navigate('/adminpage');
    } else {
      // Display an error message or handle invalid credentials
      alert('Invalid admin credentials');
    }
  };

  return (
    <div className='container p-3 m-5' style={{ border: '2px solid gray' }}>
      <h1 className="text-center">Admin LogIn</h1>
      <form onSubmit={handleSubmit} className='text-center d-inline align-items-center'>
        <label htmlFor="adminName" className="form-label">Enter Admin Name : </label>
        <input
          type="text"
          placeholder="Admin Name"
          className="form-control"
          autoComplete='off'
          name="adminName"
          value={admin.adminName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="adminPassword" className="form-label">Enter Password : </label>
        <input
          type="password"
          className="form-control "
          autoComplete='off'
          placeholder="Password"
          name="adminPassword"
          value={admin.adminPassword}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          value="Login"
          className="form-control btn btn-outline-success my-1 mx-4 px-3"
          style={{ width: "45%" }}
        />
      </form>
    </div>
  );
}
