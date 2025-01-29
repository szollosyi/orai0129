import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Login } from './Login';
import { Registration } from './Registration';
import './App.css';

export const App=()=> {
  return (
    <Router>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <div className='container-fluid'>
          <div className='navbar-brand'>UserAgent Salt</div>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>Login</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to={'/Registration'} className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>Registration</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path='*' element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;
