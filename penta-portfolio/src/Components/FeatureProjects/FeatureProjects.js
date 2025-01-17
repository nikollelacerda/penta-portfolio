import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './FeatureProjects.scss';

const FeatureProjects = () => {
    return (
        <div className="projects-page">
            <div className='title-projects'>
                <h3 className='projects-page-title'>PROJECTS</h3>
            </div>
            <div className='projects-preview'>
                <div className='container'>
                    <div className='row'>
                        <h4 
                            className='col s4 m4 l4 project-title' 
                            style={{textAlign:"right"}}>
                                doctor luciano gazzoni
                        </h4>
                        <p className='col s4 m4 l4 project-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum 
                            euismod ipsum ut pellentesque. Sed porta leo neque, sit amet placerat tortor 
                            venenatis bibendum. Fusce mattis scelerisque aliquam. Curabitur feugiat mi quis 
                            dolor volutpat, sit amet viverra neque maximus. Pellentesque quis tellus ullamcorper 
                            nunc dapibus fringilla in tincidunt dolor.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum 
                            euismod ipsum ut pellentesque. Sed porta leo neque, sit amet placerat tortor 
                            venenatis bibendum. Fusce mattis scelerisque aliquam. Curabitur feugiat mi quis 
                            dolor volutpat, sit amet viverra neque maximus. Pellentesque quis tellus ullamcorper 
                            nunc dapibus fringilla in tincidunt dolor.
                        </p>
                        <img className='col s4 m4 l4 project-img' src='/images/projects/projectsPageImg1.png'></img>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <p className='col s4 m4 l4 project-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum 
                                euismod ipsum ut pellentesque. Sed porta leo neque, sit amet placerat tortor 
                                venenatis bibendum. Fusce mattis scelerisque aliquam. Curabitur feugiat mi quis 
                                dolor volutpat, sit amet viverra neque maximus. Pellentesque quis tellus ullamcorper 
                                nunc dapibus fringilla in tincidunt dolor.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum 
                                euismod ipsum ut pellentesque. Sed porta leo neque, sit amet placerat tortor 
                                venenatis bibendum. Fusce mattis scelerisque aliquam. Curabitur feugiat mi quis 
                                dolor volutpat, sit amet viverra neque maximus. Pellentesque quis tellus ullamcorper 
                                nunc dapibus fringilla in tincidunt dolor.
                        </p>
                        <img className='col s4 m4 l4 project-img' src='/images/projects/projectsPageImg2.png'></img>
                        <h4 className='col s4 m4 l4 project-title'>fora da caixa</h4>
                    </div>
                </div>
                <div className="projects-page-link">
                    <a>View more projects</a>
                </div>
            </div>
        </div>
    );
};

export default FeatureProjects;
