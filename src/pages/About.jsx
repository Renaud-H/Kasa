import React from 'react';

import Navbar from '../layouts/Navbar';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import Footer from '../layouts/Footer';

// Import du css
import '../styles/About.css';

function About() {
    return (
        <div className="about">
            <Navbar />
            <Banner>
                <div className="banner2 banner-commun"></div>
            </Banner>
            <div className="about-infos">
                <div><Collapse></Collapse>"Fiabilité"</div>
                <div>"Respect"</div>
                <div>"Service"</div>
                <div>"Sécurité"</div>
            </div>

            <Footer />
        </div>
    );
}

export default About;
