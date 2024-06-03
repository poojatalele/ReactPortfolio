import React from 'react';
import './Project.css'; 
import quotelogo from '../../components/images/quote-logo.png';
import googlelogo from '../../components/images/google.png';
import facebooklogo from '../../components/images/facebook.png';
import instalogo from '../../components/images/instagram.png';


function MyProjects() {
  const projects = [
    {
      img: quotelogo,
      header: 'Quotique',
      subheader: 'Random Quote Generator',
      text: 'Quotique is a web application that provides users with random motivational quotes every time they visit the page. Great for daily inspiration!',
      link: 'https://quotique.vercel.app/'
    },
    {
      img: googlelogo,
      header: 'Google',
      subheader: 'Search Engine',
      text: 'Google is the leading search engine globally, offering comprehensive search results and other services like Gmail, Maps, and YouTube.',
      link: 'https://www.google.com'
    },
    {
      img: facebooklogo,
      header: 'Facebook',
      subheader: 'Social Media',
      text: 'Google is the leading search engine globally, offering comprehensive search results and other services like Gmail, Maps, and YouTube.',
      link: 'https://www.facebook.com/'
    },
    {
      img: instalogo,
      header: 'Google',
      subheader: 'Search Engine',
      text: 'Google is the leading search engine globally, offering comprehensive search results and other services like Gmail, Maps, and YouTube.',
      link: 'https://www.instagram.com/'
    },
    
    //more projects as needed
  ];

  return (
    <div className="projects-section">
      <h2>MY BEST PROJECTS</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.img} alt={project.subheader} />
            </div>
            <div className="project-content">
              <h2 className="project-header">{project.header}</h2>
              <h3 className="project-subheader">{project.subheader}</h3>
              <p className="project-text">{project.text}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProjects;
