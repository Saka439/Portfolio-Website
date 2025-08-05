import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Saka Ndzana Said.</p>
            <div className="social-links">
                <div>
                    <a href="https://www.linkedin.com/in/ndzana-saka-29447624a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div>
                    <a href="https://github.com/Saka439" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;