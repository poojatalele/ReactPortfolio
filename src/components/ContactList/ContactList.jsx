import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './ContactList.css'


const ContactList = () => {
  return (
      <div className="card-contact">
        <h1 className='card-headerText'>Get in Touch</h1>
        <div className="card-contactInfo">
            <a href='https://mail.google.com/mail/u/0/#inbox' className='contact-list'><FontAwesomeIcon icon={faEnvelope} />poojatalele06@gmail.com</a>
            <a href='#' className='contact-list'><FontAwesomeIcon icon={faPhone} />+91 9876543210</a>
            <a href='#' className='contact-list'><FontAwesomeIcon icon={faLocationDot} />Electronic City, Bangalore</a>
            <a href='https://www.facebook.com/' className='contact-list'><FontAwesomeIcon icon={faFacebook} />Facebook</a>
            <a href='https://twitter.com/' className='contact-list'><FontAwesomeIcon icon={faTwitter} />Twitter</a>
            <a href='https://www.instagram.com/' className='contact-list'><FontAwesomeIcon icon={faInstagram} />Instagram</a>
            <a href='https://github.com/' className='contact-list'><FontAwesomeIcon icon={faGithub} />Github</a>
            <a href='https://www.linkedin.com/in/pooja-talele-3418ba282/' className='contact-list'><FontAwesomeIcon icon={faLinkedin} />LinkedIn</a>
        </div>
    </div>
  );
};

export default ContactList;