import React from 'react';
import '../assets/css/Navbar.css';
import { Link } from 'react-router-dom';
export const Bar = () => {
    return (
        <nav className="navbar">
            <div className="l">AB Estates</div>
            <ul className="nav-links">
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Dashboard">Dashboard</Link></li>
            </ul>
        </nav>
    );
}

