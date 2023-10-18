import React from 'react'
import { Link } from "react-router-dom"

import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"

import "../styles/Error404.css"

function Error404() {
    return (
        <div>
            <Navbar />
            <div className='error commun-error'>
                <span>404</span>
                <h4>Oups! La page que vous demandez n'existe pas.</h4>
                <p><Link to="/">Retourner sur la page d’accueil</Link></p>
            </div>

            <Footer />
        </div>
        
    );
}

export default Error404;
