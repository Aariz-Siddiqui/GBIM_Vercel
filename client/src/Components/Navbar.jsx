import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" exact className="nav-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/features" className="nav-link" activeClassName="active">
          Features
        </NavLink>
        <NavLink to="/pricing" className="nav-link" activeClassName="active">
          Pricing
        </NavLink>
        <NavLink to="/resources" className="nav-link" activeClassName="active">
          Resources
        </NavLink>
        <NavLink to="/aichatbot" className="nav-link" activeClassName="active">
          AIChatbot
        </NavLink>
      </div>

      <div className="extra-links">
        <NavLink to="/contact" className="nav-link" activeClassName="active">
          Contact Us
        </NavLink>

        <NavLink to="/register"><button className="auth-btn sign-up">Sign Up</button>
        </NavLink>
        <NavLink to="/login">
        <button className="auth-btn login">Login</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
