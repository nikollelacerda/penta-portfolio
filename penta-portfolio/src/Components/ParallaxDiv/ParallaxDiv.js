import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './Parallax.scss'


const ParallaxDiv = () => {
    useEffect(() => {
        // Inicializar o Parallax
        const elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems);
    }, []);

    return (
        <>
            <div className="parallax-container" style={{ height: '500px' }}>
                <div className="parallax">
                    <img 
                        src="/images/parallax/parallaxImg1.png" 
                        alt="Parallax Background 1" 
                    />
                </div>
            </div>

            <div className="section white about-us-text">
                <div className="row container">
                    <h3 className="header title">about us</h3>
                    <div className='text-about grey-text text-darken-3 lighten-3'>
                        <p>
                            Imagine a group of talented professionals, each with their unique skills and passionate 
                            about the art of development.
                        </p>
                        <p>
                            This is PENTA, a collective of freelancersdevelopers who have a common goal: to create exceptional 
                            digital solutions thatexceed expectations. Each member of the PENTA is a fundamental part of thepuzzle, 
                            bringing a unique view to the table.
                        </p>
                        <p>
                            Diversity is what defines PENTA. They cover a wide range of specialties,from web and mobile 
                            development to interface design and user experience. This an eclectic mix of talent allows PENTA 
                            to approach projects holistically,considering every detail to create cohesive and impactful solutions.
                        </p>
                        <p>
                            Collaboration is at the heart of PENTA. Although they are freelancers, they share aTeamwork culture 
                            that values the exchange of knowledge and ideas. This is reflectedin the way they approach each project: 
                            a symphony of collaboration where each membercontributes with its unique expertise.
                        </p>
                        <p>
                            But PENTA is more 
                            than just a team of freelancers; is a community in searchof experience. They not only build apps and websites, but also relationships.
                        </p>
                    </div>
                </div>
            </div>

            {/* Segundo Parallax */}
            <div className="parallax-container" style={{ height: '500px' }}>
                <div className="parallax">
                    <img 
                        src="/images/parallax/parallaxImg2.png" 
                        alt="Parallax Background 2" 
                    />
                </div>
            </div>
        </>
    );
};

export default ParallaxDiv;
