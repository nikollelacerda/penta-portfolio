import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    
    useEffect(() => {
        const elems = document.querySelectorAll(".sidenav");
        M.Sidenav.init(elems);
    }, []);

    return (
        <nav>
          <div>
            <div class="nav-wrapper navbar">
              <Link to="/" className="brand-logo">
                <img src="/images/logo/logoPenta.png" className="logo-img"></img>
              </Link>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><a href="collapsible.html">CONTACT</a></li>
              </ul>
            </div>
        </div>
      </nav>
    );
};

export default Navbar;