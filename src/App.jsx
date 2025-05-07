import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Homepage from './Components/Homepage';
import UserPage from './Components/UserPage';
import AdminLogin from './Components/AdminLogin';
import AdminPage from './Components/AdminPage'; // Import the AdminPage component
import NomineeForm from './Components/NomineeForm'; // Import the NomineeForm component
import './index.css';
import './loginStyles.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Home</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">User Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin-login">Admin Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/adminpage" element={<AdminPage />} /> {/* Add route for AdminPage */}
          <Route path="/nominee-form" element={<NomineeForm />} /> {/* Add route for NomineeForm */}
        </Routes>
      </div>
    </Router>
  );
}
