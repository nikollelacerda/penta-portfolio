import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './FeatureProjects.scss';
import { Link } from 'react-router-dom';

const FeatureProjects = () => {
    return (
        <div className="projects-page">
            <div className="title-projects">
                <h3 className="projects-page-title">projects</h3>
            </div>
            <div className="projects-preview">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6 l6 project-one-content">
                            <h4 className="project-title">Project One</h4>
                            <p className="project-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum 
                                euismod ipsum ut pellentesque. Sed porta leo neque, sit amet placerat tortor 
                                venenatis bibendum. Fusce mattis scelerisque aliquam. Curabitur feugiat mi quis 
                                dolor volutpat, sit amet viverra neque maximus. Pellentesque quis tellus ullamcorper 
                                nunc dapibus fringilla in tincidunt dolor.
                            </p>
                            <button className="btn">Saber mais</button>
                        </div>
                        <div className="col s12 m6 l6">
                            <img className="project-img" src="/images/projects/projectsPageImg1.png" alt="Project One" />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col s12 m6 l6">
                            <img className="project-img" src="/images/projects/projectsPageImg2.png" alt="Project Two" />
                        </div>
                        <div className="col s12 m6 l6 project-two-content">
                            <h4 className="project-title">Project Two</h4>
                            <p className="project-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum 
                                euismod ipsum ut pellentesque. Sed porta leo neque, sit amet placerat tortor 
                                venenatis bibendum. Fusce mattis scelerisque aliquam. Curabitur feugiat mi quis 
                                dolor volutpat, sit amet viverra neque maximus. Pellentesque quis tellus ullamcorper 
                                nunc dapibus fringilla in tincidunt dolor.
                            </p>
                            <button className="btn project-two-button">Saber mais</button>
                        </div>
                    </div>
                </div>
                <div className="projects-page-link">
                    <Link to="/projects" className='btn'>View more projects</Link>
                </div>
            </div>
        </div>
    );
};

export default FeatureProjects;
