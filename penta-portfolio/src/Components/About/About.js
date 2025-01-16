import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import "./About.scss";

const About = () => {
    useEffect(() => {
        const elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {
            fullWidth:true,
            indicators:true,
        });
    }, []);

    const handleNext = () => {
        const carousel = M.Carousel.getInstance(document.querySelector('.carousel'));
        carousel.next();
    };

    const handlePrev = () => {
        const carousel = M.Carousel.getInstance(document.querySelector('.carousel'));
        carousel.prev();
    };

    return (
        <div class="carousel carousel-slider center">
            <div class="carousel-item" href="#one!">
                <img src="/images/imgOne.jpg"></img>
            </div>
            <div class="carousel-item" href="#two!">
                <img src="/images/imgTwo.jpg"></img>
            </div>
            <div class="carousel-item" href="#three!">
                <img src="/images/imgThree.jpg"></img>
            </div>

            <button 
                className="btn-floating btn-small white"
                style={{
                    position:'absolute',
                    top:'50%',
                    left:'10px',
                    trasform:'translateY(-50%)',
                }}
                onClick={handlePrev}
                >
                <i className="material-icons">chevron_left</i>
            </button>
            <button 
                className="btn-floating btn-small white"
                style={{
                    position:'absolute',
                    top:'50%',
                    left:'10px',
                    trasform:'translateY(-50%)',
                }}
                onClick={handleNext}
                >
                <i className="material-icons">chevron_right</i>
            </button>
        </div>
    );
}

export default About;