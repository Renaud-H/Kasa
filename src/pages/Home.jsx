import React from 'react'


import Navbar from '../layouts/Navbar'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import Footer from '../layouts/Footer'

// Import du css
import '../styles/Home.css'

// Composant Home : Page d'accueil de l'application
function Home(){
    return (
        <div role="main">
            <Navbar />
            <Banner >
                <div className="banner banner-commun">
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
            </Banner>

            <Cards />
            <Footer />
        </div>
    )
}

export default Home