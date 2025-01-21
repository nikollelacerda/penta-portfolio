import React from "react";
import './Footer.scss';

const Footer = () => {

    return (
        <footer class="page-footer">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5>more about PENTA</h5>
                        <p>Access the links to know more about us and stay tuned!</p>
                    </div>
                    <div class="col l4 offset-12 s12">
                        <h5>contact</h5>
                        <ul>
                            <li>
                                <a href="#!">email@email.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <div class="container">
                    © 2025 Copyright Text
                    <a class="right" href="#!">More Link</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;