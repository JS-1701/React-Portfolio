import React from 'react';
import Project from '../components/Project.jsx';


import "../styles/portfolio.css";


const projects = [
    { title: "Weather Dashboard", image: "../assets/weatherdashboard.png ", url: "https://github.com/JS-1701/Weather-Dashboard?tab=readme-ov-file" },
    { title: "Project 2", image: "../assets/vehicle.png", url: "https://github.com/JS-1701/vehicle-builder" },
    { title: "Project 3", image: "../assets/hobbit.png", url: "https://github.com/JS-1701/Book-Search" },
    { title: "Project 4", image: "../assets/candidate.png", url: "https://github.com/JS-1701/Canidate-Search" },
    { title: "Project 5", image: "../assets/employee.png", url: "https://github.com/JS-1701/Employee-Tracker" },
    { title: "Project 6", image: "../assets/kanban.png", url: "https://github.com/JS-1701/Kanban-Board" },

];


export default function Portfolio() {
    return (
        <div className='port'>
            <h1><strong>Portfolio</strong></h1>
            <div className="portfolio-container">
                {projects.map((project, index) => (
                    <Project key={index} title={project.title} image={project.image} url={project.url} />
                ))}
            </div>
        </div>
    );
}