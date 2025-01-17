import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import "./Navbar.scss";

const Navbar = () => {
    
    useEffect(() => {
        const elems = document.querySelectorAll(".sidenav");
        M.Sidenav.init(elems);
    }, []);

    return (
        <nav>
          <div>
            <div class="nav-wrapper navbar">
              <a href="#" class="brand-logo">
                <img src="/images/logo/logoPenta.png" className="logo-img"></img>
              </a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="sass.html">HOME</a></li>
                <li><a href="badges.html">ABOUT</a></li>
                <li><a href="collapsible.html">CONTACT</a></li>
              </ul>
            </div>
        </div>
      </nav>
    );
};

export default Navbar;