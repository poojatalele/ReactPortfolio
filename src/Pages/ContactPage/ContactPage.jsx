import React from 'react';
import './ContactPage.css';
import Navbar from '../../components/Navbar/Navbar';

function ContactPage() {
    return (
        <div className="ContactPage">
            <Navbar />
            <div className="contact-page">
                <div className='contact-container'>
                    <h1 className="contact-title">CONTACT ME</h1>
                    <p className="contact-description">
                        You can find me anywhere if you contact me using my social media, most of the time I'm available there.
                    </p>
                    <p className="form-instruction">OR USE THE FORM BELOW TO GET IN TOUCH:</p>
                    <form className="contact-form">
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email address" />
                        <textarea placeholder="Message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default ContactPage;
