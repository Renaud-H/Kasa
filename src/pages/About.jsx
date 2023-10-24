import React from 'react';

import Navbar from '../layouts/Navbar';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import Footer from '../layouts/Footer';

// Import du css
import '../styles/About.css';

function About() {
    // Déclaration des constantes de contenu de Collapse
    return (
        <div className="about">
            <Navbar />
            <Banner>
                <div className="banner2 banner-commun"></div>
            </Banner>
            <div className="about-infos">
                <div><Collapse title="Titre du Collapsible" content="Contenu du Collapsible" /></div>
                <div><Collapse title="Titre du Collapsible" content="Contenu du Collapsible" /></div>
                <div><Collapse title="Titre du Collapsible" content="Contenu du Collapsible" /></div>
                <div><Collapse title="Titre du Collapsible" content="Contenu du Collapsible" /></div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
