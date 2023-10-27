// import React from 'react'
import flecheGauche from '../assets/carrousel_l.svg';
import flecheDroite from '../assets/carrousel_r.svg';

// Import du css
import '../styles/Carousel.css';

function Carousel({ pictures }) {
    return (
        <div className="carousel">
            <div className="div-image">
                <img
                    src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
                    className="classImage"
                    alt="Test"
                />
            </div>
            <div> 
                    <button >
                        <img src={flecheGauche} className='classFlecheGauche' alt='flèche gauche pour changer de photo ' />
                    </button>
                    <button >
                        <img src={flecheDroite} className='classFlecheDroite' alt='flèche droite pour changer de photo ' />
                    </button>
                </div>
        </div>
    );
}

export default Carousel;
