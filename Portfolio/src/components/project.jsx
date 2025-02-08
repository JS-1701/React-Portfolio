import React from 'react';
import '../styles/project.css';

export default function Project(props) {
    return (
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="project-link">
        <div className="project-container">
            <div className="image-container">
                <img src={props.image} alt={props.title} className="image" />
                <div className="middle">
                    <div className="text">{props.title}</div>
                </div>
            </div>
        </div>
        </a>
    );
}