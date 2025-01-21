import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectsDetails.scss";

const projects = [
    {id:1, title:"Projects 1", description:"Full details 1"},
    {id:2, title:"Projects 2", description:"Full details 2"},
    {id:3, title:"Projects 3", description:"Full details 3"},
];

const ProjectsDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projects.find((p) => p.id === parseInt(id));

    if(!project) {
        return <p>Project not found</p>
    }

    return (
        <div className="project-details-container">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button className="back-button" onClick={() => navigate(-1)}>
                Go back
            </button>
        </div>
    );
}

export default ProjectsDetails;