import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="hero-section">
                <img 
                    src="/Galax.jpg" 
                    className="profile-image"
                />
                <div className="hero-content">
                    <h1>Bienvenue sur mon Portfolio</h1>
                    <p>Je suis étudiant en 3ème année de génie informatique à Polytechnique Montréal, 
                        passionné par le développement web et logiciel.</p>
                    <p>En tant qu'apporteur de solutions 
                       créatives, je recherche activement un stage pour mettre en pratique mes compétences 
                       techniques et contribuer à des projets innovants.</p>
                </div>
            </div>
        </div>

    );
};

export default Home;