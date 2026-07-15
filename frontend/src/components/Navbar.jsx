import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">Orthodox Church</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/calendar">Church Calendar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Location/Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/beliefs">What We Believe</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/history">A Brief History</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/give">Ways to Give</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/12things">12 Things to Know</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
