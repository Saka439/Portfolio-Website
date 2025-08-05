import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
    return (
        <header>
            <h1>Mon Portfolio</h1>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">À Propos</Link></li>
                    <li><Link to="/projects">Projets</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;