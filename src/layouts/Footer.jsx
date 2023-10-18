import React from 'react'

import logo from "../assets/logo_white.png"

// Import du css
import "../styles/Footer.css"

function Footer() {
    return (
        <footer className='footer'>
            <div className='img_footer'><img src={logo} alt='Logo de la marque Kasa' /></div> 
            <div className='credits'><p>© 2020 Kasa. All rights reserved</p></div>
        </footer>
    )
}

export default Footer