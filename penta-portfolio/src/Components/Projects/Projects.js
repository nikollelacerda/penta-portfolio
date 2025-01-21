import React, { useState, useEffect } from 'react';
import './Projects.scss';
import M from 'materialize-css/dist/js/materialize.min.js';

const dummyProjects = [
    {
      id: 1,
      name: 'Projeto 1',
      description: 'Descrição do projeto 1',
      status: 'Em andamento',
      label: 'Tecnologia',
      image: '/images/projectDetails/projectsDetailsImg1.png', // Exemplo de imagem
    },
    {
      id: 2,
      name: 'Projeto 2',
      description: 'Descrição do projeto 2',
      status: 'Concluído',
      label: 'Marketing',
      image: '/images/projectDetails/projectsDetailsImg2.png', // Exemplo de imagem
    },
    {
      id: 3,
      name: 'Projeto 3',
      description: 'Descrição do projeto 3',
      status: 'A fazer',
      label: 'Design',
      image: '/images/projectDetails/projectsDetailsImg3.png', // Exemplo de imagem
    },
  ];

const Projects = () => {
    const [projects] = useState(dummyProjects);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
      const modals = document.querySelectorAll('.modal');
      M.Modal.init(modals);
    }, []);

    const handleOpenModal = (project) => {
      setSelectedProject(project);
      const modalElement = document.querySelector('#modal1');
      const instance = M.Modal.getInstance(modalElement);
      instance.open();
    };

    return (
      <div className="projects container">
        <h3>PROJECTS</h3>
        <div className="row">
          {projects.length === 0 ? (
            <p className="center-align">No projects found</p>
          ) : (
            projects.map((project) => (
              <div key={project.id} className="col s12 m6">
                <div className="card horizontal">
                  <div className="card-image">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className='responsive-img projects-img'
                    />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <h5>{project.name}</h5>
                      <p>
                        <strong>Etiqueta: </strong> 
                        {project.label}
                      </p>
                    </div>
                  </div>
                  <div className="card-action">
                    <button 
                      className="btn custom-black-btn"
                      onClick={() => handleOpenModal(project)}
                    >Ver Detalhes</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div id="modal1" className="modal">
          <div className="modal-content">
              {selectedProject && (
                <>
                  <h3>{selectedProject.name}</h3>
                  <p>{selectedProject.description}</p>
                  <a className="btn project-link">projetoLink.com</a>
                </>
            )}
          </div>
          <div className="modal-footer">
              <button
                href="#!"
                className="btn custom-black-btn modal-close"
                >
                  Fechar
                </button>
          </div>
        </div>
      </div>
    );
};

export default Projects;
