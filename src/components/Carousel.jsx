// import React from 'react'

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
        </div>
    );
}

export default Carousel;
