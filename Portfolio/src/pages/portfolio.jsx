import React from 'react';
import Project from '../components/project';


import "../styles/portfolio.css";


const projects = [
    { title: "Weather Dashboard", image: "/assets/weatherdashboard.png ", url: "https://github.com/JS-1701/Weather-Dashboard?tab=readme-ov-file" },
    { title: "Vehicle Builder", image: "/assets/vehicle.png", url: "https://github.com/JS-1701/vehicle-builder" },
    { title: "Book Search Engine", image: "/assets/hobbit.png", url: "https://github.com/JS-1701/Book-Search" },
    { title: "Candidate Search Engine", image: "/assets/candidate.png", url: "https://github.com/JS-1701/Canidate-Search" },
    { title: "Employee Tracker", image: "/assets/employee.png", url: "https://github.com/JS-1701/Employee-Tracker" },
    { title: "Soical Network API", image: "/assets/kanban.png", url: "https://github.com/JS-1701/Kanban-Board" },

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