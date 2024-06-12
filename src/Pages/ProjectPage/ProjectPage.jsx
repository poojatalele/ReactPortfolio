import React from 'react';
import './ProjectPage.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import quotelogo from '../../components/images/quote-logo.png';
import quizlogo from '../../components/images/Quiz-Logo.png';
import devlogo from '../../components/images/dev-logo.png';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function MyProjects() {
  const projects = [
    {
      img: quotelogo,
      header: 'Quotique',
      subheader: 'Random Quote Generator',
      text: 'Quotique is a web application that provides users with random motivational quotes every time they visit the page. Great for daily inspiration!',
      link: 'https://quotique.vercel.app/',
      githublink: 'https://github.com/poojatalele/Quotique'
    },
    {
      img: quizlogo,
      header: 'Quiz App',
      subheader: 'Play quizzes',
      text: 'Discover, create, and enjoy quizzes on any topic with our user-friendly quiz app.Perfect for learning, fun, and staying sharp on your favorite subjects! ',
      link: 'https://quiz-app-delta-ten.vercel.app/',
      githublink: 'https://github.com/poojatalele/Quiz'
    },
    {
      img: devlogo,
      header: 'Porfolio',
      subheader: 'Developer Portfolio',
      text: 'Welcome to my developer portfolio! Explore my projects, skills, and experience as a passionate software developer. Lets connect and create something amazing together.',
      link: 'https://react-portfolio-pooja-psi.vercel.app/',
      githublink: 'https://github.com/poojatalele/ReactPortfolio'
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
              {/* <a href={project.githublink} target="_blank" rel="noopener noreferrer">Github</a> */}
              <a href={project.githublink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Github</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProjects;
