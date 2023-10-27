import React, {useState } from 'react'
import flecheGauche from '../assets/carrousel_l.svg';
import flecheDroite from '../assets/carrousel_r.svg';

// Import du css
import '../styles/Carousel.css';

function Carousel({ pictures }) { // Props envoyant un tableau avec les URLs d'images
    console.log(pictures)

    // Variable compteur, défaut : 0
    const [index, setIndex] = useState(0)  

    // Nombre max d'images
    const totalPictures = pictures.length-1


    // Conditions : 
    if (index < 0) setIndex(totalPictures)  // Si < à 0, défini le nombre d'images max
    if (index > totalPictures) setIndex(0)  // Si > au max d'images, alors set à zéro

    return (
        <div className="carousel">
            <div className="div-image">
                <img 
                src={pictures[index]} 
                className="classImage" 
                key={"car-"+index} 
                alt={"photo "+index} 
                />
            </div>
            <div> 
                <button onClick={() => setIndex(index - 1)}>{index}

                    <img 
                    src={flecheGauche} 
                    className='classFlecheGauche' 
                    alt={'flèche gauche pour changer de photo '+index} />
                
                </button>
                <button onClick={() => setIndex(index + 1)}>{index}

                    <img 
                    src={flecheDroite} 
                    className='classFlecheDroite' 
                    alt={'flèche droite pour changer de photo '+index}/>
                
                </button>
            </div>
        </div>
    );
}

export default Carousel;
