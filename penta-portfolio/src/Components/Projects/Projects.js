import React, { useState, useEffect } from 'react';

const dummyProjects = [
    {
      id: 1,
      name: 'Projeto 1',
      description: 'Descrição do projeto 1',
      status: 'Em andamento',
      label: 'Tecnologia',
      image: 'https://via.placeholder.com/150', // Exemplo de imagem
    },
    {
      id: 2,
      name: 'Projeto 2',
      description: 'Descrição do projeto 2',
      status: 'Concluído',
      label: 'Marketing',
      image: 'https://via.placeholder.com/150', // Exemplo de imagem
    },
    {
      id: 3,
      name: 'Projeto 3',
      description: 'Descrição do projeto 3',
      status: 'A fazer',
      label: 'Design',
      image: 'https://via.placeholder.com/150', // Exemplo de imagem
    },
  ];

const Projects = () => {
    const [projects] = useState(dummyProjects);

    return (
      <div className="projects">
        <h2>Meus Projetos</h2>
        <div className="projects-list">
          {projects.length === 0 ? (
            <p>No projects found</p>
          ) : (
            projects.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.name} />
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p><strong>Status:</strong> {project.status}</p>
                <p><strong>Etiqueta:</strong> {project.label}</p>
                <button>Ver Detalhes</button>
              </div>
            ))
          )}
        </div>
      </div>
    );
};

export default Projects;
