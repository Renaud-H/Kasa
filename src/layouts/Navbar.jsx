// import React from 'react'
// import { NavLink } from 'react-router-dom';

import logo from '../assets/logo.png';

// Import du css
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="Logo de la marque Kasa" />
            <nav>
                <a href="http://localhost:3000/">
                    <ul>http://localhost:3000/</ul>
                </a>
            </nav>
        </div>
    );
}

export default Navbar;
