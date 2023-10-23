import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import logements from '../data/logements.json';

import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import Error404 from './Error404';

// Import du css
import '../styles/Product.css';

function Logement() {
    // Récupère l'ID de l'URL
    const [searchParams] = useSearchParams();
    const [idLogement] = useState(searchParams.get('_id'));

    // Cherche l'id dans le fichier logements.json
    const logement = logements.find((element) => element.id === idLogement);

    // Si URL modifié manuellement, redirection vers la page d'erreur
    if (!logement) return <Error404 />;

    // Récupère la liste des équipements
    const equipements = logement.equipments.map((element, index) => (
        <li className="description-content" key={'equip-' + index.toString()}>
            {element}
        </li>
    ));

    return (
        <div className="logement">
            <Navbar />
            <div className="ficheLogement">
                <div className="div-description">
                    <h1>{logement.title}</h1>
                    <h4>{logement.location}</h4>
                    <div className="div-tags">
                        {logement.tags.map((element, index) => {
                            return (
                                <p className="tags" key={'tags-' + index}>
                                    {element}
                                </p>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Logement;
