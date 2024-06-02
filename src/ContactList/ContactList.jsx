import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const ContactList = () => {
  return (
    <div className="card-contact">
      <h1 className='card-headerText'>Get in Touch</h1>
      <ul className='contact-list'>
        <a><FontAwesomeIcon icon={faEnvelope} />poojatalele06@gmail.com</a>
        <a><FontAwesomeIcon icon={faPhone} />+91 9876543210</a>
        <a><FontAwesomeIcon icon={faLocationDot} />Electronic City, Bangalore</a>
        {/* <a><FontAwesomeIcon icon={faFacebook} /></a> */}
      </ul>
    </div>
  );
};

export default ContactList;