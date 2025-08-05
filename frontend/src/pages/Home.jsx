import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <h1>Bienvenue sur mon Portfolio</h1>
            <p>Découvrez mes projets et mes compétences.</p>
            <nav>
                <ul>
                    <li><Link to="/about">À propos</Link></li>
                    <li><Link to="/projects">Projets</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;