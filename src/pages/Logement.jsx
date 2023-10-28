import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Navbar from '../layouts/Navbar';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import Footer from '../layouts/Footer';
import Error404 from './Error404';

// Import du css
import '../styles/Logement.css';

// Import des données fournies
import logements from '../data/logements.json';
// Création des notes dans un array
const arrayStars = [1, 2, 3, 4, 5];

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

            <Carousel pictures={logement.pictures} />

            {/* Affichage des données d'un ID */}
            <div className="ficheLogement">
                <div className="div-description">
                    <h1>{logement.title}</h1> {/* Titre */}
                    <h4>{logement.location}</h4> {/* Emplacement */}
                    <div className="div-tags">
                        {' '}
                        {/* Tags */}
                        {logement.tags.map((element, index) => {
                            return (
                                <p
                                    className="tags"
                                    /* Clé de tag */ key={'tags-' + index}
                                >
                                    {element}
                                </p>
                            );
                        })}
                    </div>
                </div>

                <div className="bloc-host-rate">
                    <div className="div-host">
                        <p>{logement.host.name}</p> {/* Nom du propriétaire */}
                        <img
                            src={logement.host.picture}
                            alt={logement.title}
                        />{' '}
                        {/* Photo du propriétaire */}
                    </div>

                    <div className="div-stars">
                        {arrayStars.map((element) => {
                            const ratingStars = parseInt(
                                logement.rating,
                            ); /* Récupération note */
                            return (
                                <span
                                    key={'star-' + element}
                                    className={
                                        element <= ratingStars
                                            ? 'span1'
                                            : 'span2'
                                    }
                                >
                                    ★
                                </span>
                            ); /* Affichage de la note */
                        })}
                    </div>
                </div>
            </div>

            {/* Ajout des Collapses description et équipements */}
            <div className="collapseLogement">
                <div className="logement-div-collapse">
                    <Collapse
                        title="Description"
                        content={logement.description}
                    />
                </div>
                <div className="logement-div-collapse">
                    <Collapse 
                        title="Equipements" 
                        content={equipements} />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Logement;
