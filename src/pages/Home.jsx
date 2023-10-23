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
            <Banner />
            <Cards />
            <Footer />
        </div>
    )
}

export default Home