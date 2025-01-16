import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './FeatureProjects.scss';

const FeatureProjects = () => {
    return (
        <div className="container feat-proj">
            {/* Título da seção */}
            <div className="section-title">
                <h3>Feature Projects</h3>
            </div>

            {/* Primeira linha */}
            <div className="row">
                {/* Coluna 1 */}
                <div className="col s4 m4 l4 project-title">
                    <h1>projects</h1>
                </div>

                {/* Coluna 2 - Texto */}
                <div className="col s4 m4 l4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
                        fermentum euismod ipsum ut pellentesque. Sed porta leo neque, sit 
                        amet placerat tortor venenatis bibendum. Fusce mattis scelerisque 
                        aliquam. Curabitur feugiat mi quis dolor volutpat, sit amet viverra 
                        neque maximus. Pellentesque quis tellus ullamcorper nunc dapibus fringilla 
                        in tincidunt dolor. Integer ultricies mollis nunc sit amet hendrerit. 
                        Aliquam porttitor velit felis, quis ornare purus eleifend vitae. Phasellus 
                        tortor orci, vulputate nec justo sit amet, feugiat bibendum urna. Praesent 
                        nisl nibh, rhoncus et eros vitae, interdum porta quam.
                    </p>
                </div>

                {/* Coluna 3 - Imagem */}
                <div className="col s4 m4 l4 img">
                    <img src="/images/imgOne.jpg" alt="Project Example" />
                </div>
            </div>

            {/* Segunda linha */}
            <div className="row">
                {/* Coluna 1 - Texto */}
                <div className="col s4 m4 l4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
                        fermentum euismod ipsum ut pellentesque. Sed porta leo neque, sit 
                        amet placerat tortor venenatis bibendum. Fusce mattis scelerisque 
                        aliquam. Curabitur feugiat mi quis dolor volutpat, sit amet viverra 
                        neque maximus. Pellentesque quis tellus ullamcorper nunc dapibus fringilla 
                        in tincidunt dolor. Integer ultricies mollis nunc sit amet hendrerit. 
                        Aliquam porttitor velit felis, quis ornare purus eleifend vitae. Phasellus 
                        tortor orci, vulputate nec justo sit amet, feugiat bibendum urna. Praesent 
                        nisl nibh, rhoncus et eros vitae, interdum porta quam.
                    </p>
                </div>

                {/* Coluna 2 - Imagem */}
                <div className="col s4 m4 l4 img">
                    <img src="/images/imgOne.jpg" alt="Project Example 2" />
                </div>

                {/* Coluna 3 - Título */}
                <div className="col s4 m4 l4 project-title">
                <h1>projects</h1>
                </div>
            </div>

            {/* Link de navegação */}
            <div className="view-all">
                <a href="#!">View all projects</a>
            </div>
        </div>
    );
};

export default FeatureProjects;
