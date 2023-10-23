import React from 'react';
import { Link } from 'react-router-dom';
import logements from '../data/logements.json';

// Import du css
import '../styles/Cards.css';

const Cards = () => {
    return (
        <div className="logements">
            {/* liste la base de données */}
            {logements.map((logement) => {
                const { id, cover, title } = logement;

                // affiche la fiche logement sur la page d'accueil
                return (
                    <div className="fiche-logement" key={id}>
                        <Link
                            to={{ pathname: '/Logement', search: '?_id=' + id }}
                        >
                            <img src={cover} alt={title} />
                            <h3>{title}</h3>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;
