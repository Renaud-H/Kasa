import React from 'react'
import "../styles/Footer.css"
import logo from "../assets/logo_white.png"

function Footer() {
    return (
        <footer className='footer'>
            <div className='img_footer'><img src={logo} alt='Logo de la marque Kasa' /></div> 
            <div className='credits'><p>© 2020 Kasa. All rights reserved</p></div>
        </footer>
    )
}

export default Footer