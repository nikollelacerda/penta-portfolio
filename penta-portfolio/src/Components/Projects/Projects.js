import React, { useState, useEffect } from 'react';
import './Projects.scss';

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
                      <p>{project.description}</p>
                      <p>
                        <strong>Status: </strong> 
                        {project.status}
                      </p>
                      <p>
                        <strong>Etiqueta: </strong> 
                        {project.label}
                      </p>
                    </div>
                  </div>
                  <div className="card-action">
                    <button className="btn custom-black-btn">Ver Detalhes</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
};

export default Projects;
