import React from 'react'
import Banner from '../components/Banner'

import Footer from '../layouts/Footer'

// Import du css
import '../styles/Home.css'

// Composant Home : Page d'accueil de l'application
function Home(){
    return (
        <div role="main">
            <Banner>
                <div className="banner banner-commun">
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
            </Banner>
            <Footer />
        </div>
    )
}

export default Home