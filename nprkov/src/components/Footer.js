import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
        <a
            href="https://github.com/roguepanther"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
        >
           <img
                    src={`${process.env.PUBLIC_URL}/images/github-mark-white.svg`}
                    alt="GitHub Logo"
                    className="github-logo"
                /> 
        </a>
        </div>
    );
};

export default Footer;