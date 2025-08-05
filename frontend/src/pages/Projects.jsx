import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: 'Real Time Currency Converter',
            description: 'Une application de conversion de devises en temps réel.',
            link: 'https://github.com/Saka439/RealTimeCurrencyConverter'
        },
        {
            title: 'Filtre Gaussien',
            description: "Une application de filtrage d'images utilisant le filtre gaussien.",
            link: 'https://github.com/Saka439/Filtre_Gaussien'
        },
        {
            title: 'Portfolio Website',
            description: 'Mon site web personnel pour présenter mes projets et compétences.',
            link: 'https://github.com/Saka439/Portfolio-Website'
        }
    ];

    return (
        <div className="projects">
            <h1>Mes Projets</h1>
            <div className="project-list">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        title={project.title} 
                        description={project.description} 
                        link={project.link} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;