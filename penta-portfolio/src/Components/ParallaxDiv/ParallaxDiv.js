import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';


const ParallaxDiv = () => {
    useEffect(() => {
        // Inicializar o Parallax
        const elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems);
    }, []);

    return (
        <>
            {/* Primeiro Parallax */}
            <div className="parallax-container" style={{ height: '500px' }}>
                <div className="parallax">
                    <img 
                        src="/images/parallax/parallaxImg.jpg" 
                        alt="Parallax Background 1" 
                    />
                </div>
            </div>

            {/* Conteúdo */}
            <div className="section white">
                <div className="row container">
                    <h2 className="header">Parallax</h2>
                    <p className="grey-text text-darken-3 lighten-3">
                        Parallax is an effect where the background content or image, in this case, 
                        is moved at a different speed than the foreground content while scrolling.
                    </p>
                </div>
            </div>

            {/* Segundo Parallax */}
            <div className="parallax-container" style={{ height: '500px' }}>
                <div className="parallax">
                    <img 
                        src="/images/carousel/imgOne.jpg" 
                        alt="Parallax Background 2" 
                    />
                </div>
            </div>
        </>
    );
};

export default ParallaxDiv;
