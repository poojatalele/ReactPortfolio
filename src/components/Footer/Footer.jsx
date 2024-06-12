import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h4>Pooja Talele</h4>
                    <a href="/">Home</a>
                    <a href="/about">About Me</a>
                    <a href="/contact">Contact Me</a>
                </div>
                <div className="footer-column">
                    <h4>My Social Media</h4>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
                </div>
                <div className="footer-column">
                    <h4>More from me</h4>
                    <a href="https://github.com/poojatalele" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Github</a>
                    <a href="https://resume.com" target='_blank' rel="noopener noreferrer">Resume</a>
                </div>
            </div>
            <div className="signature">
                Made with <span style={{color: '#e25555'}}>&hearts;</span> by Pooja Talele
            </div>
        </div>
    );
}

export default Footer;
