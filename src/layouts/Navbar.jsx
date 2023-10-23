// import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import logo from '../assets/logo.png';

// Import du css
import '../styles/Navbar.css';

function Navbar() {
    const isActiveStyle = { textDecoration: 'underline' };

    // Menu sous tableau si ajout d'options au menu
    const menuItems = [
        { to: '/', label: 'Accueil' },
        { to: '/about', label: 'A Propos' },
    ];
    // Choix actif et affiche le label du menu
    const menuItem = ({ to, label }) => (
        <li key={to}>
            <NavLink to={to} style={({ isActive }) => isActive ? isActiveStyle : undefined }>
                {label}
            </NavLink>
        </li>
    );

    return (
        <div className="navbar">
            <Link to="/">
                <img src={logo} alt="Logo du site Kasa" />
            </Link>
            <nav>
                <ul>{menuItems.map(menuItem)}</ul>
            </nav>
        </div>
    );
}

export default Navbar;
