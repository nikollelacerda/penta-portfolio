import React, { useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import "./Navbar.scss";

const Navbar = () => {
    useEffect(() => {
        const elems = document.querySelectorAll(".sidenav");
        M.Sidenav.init(elems);
    }, []);

    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-wrapper row valign-wrapper">
                    {/* Logo */}
                    <div className="col s4 m4 l4">
                        <a href="#" className="brand-logo">
                            <img 
                                src="/images/logo/logoPenta.png" 
                                alt="Logo" 
                                className="logo-img responsive-img" 
                            />
                        </a>
                    </div>

                    {/* Navbar Links */}
                    <ul id="nav-mobile" className="right hide-on-med-and-down col s8 m8 l8">
                        <li><a href="sass.html">HOME</a></li>
                        <li><a href="badges.html">PROJECTS</a></li>
                        <li><a href="collapsible.html">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
