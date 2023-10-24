import React, { useState } from 'react';

import chevronUp from '../assets/chevron_haut.png';
import chevronDown from '../assets/chevron_bas.png';

// Import du css
import '../styles/Collapse.css';

// Ajout des propriétés dans Collapse
function Collapse({title, content}) {
    // UseState défaut fermé
    const [contentVisible, setContentVisible] = useState(false)
    // Clic Toggle ouvert/fermé
    const affContent = () => { 
        setContentVisible(!contentVisible) // inverse la valeur actuelle
    }


    const collapseContent = (contentVisible ? "visible" : "hidden") + " collapse" // Séparation des classes
    const collapseChevron = (contentVisible ? chevronUp : chevronDown)

    return (
        <div className="collapse">

            {/* Affichage titre & chevron */}
            <div className='collapse__title' onClick={affContent}>
                <span>{title}</span>
                <div className="chevronValue">
                    <img src={collapseChevron} alt=""/>
                </div>
            </div>

            {/* Affichage du contenu */}
            <div className={collapseContent}>
                <ul>{content}</ul>
            </div>
        </div>
    )
}

export default Collapse;
