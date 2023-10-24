import React, { useState } from 'react';

import chevronUp from '../assets/chevron_haut.png';
import chevronDown from '../assets/chevron_bas.png';

// Import du css
import '../styles/Collapse.css';

// Ajout des propriétés dans Collapse
function Collapse({/* Propriétés*/ }) {
    // UseState défaut fermé
    // Clic Toggle ouvert/fermé

    return (
        <div className="collapse">

            {/* Affichage titre & chevron */}
            <div>
                titre & chevron
            </div>
            {/* Affichage du contenu */}
            <div>
                contenu
            </div>
        </div>
    )
}

export default Collapse;
