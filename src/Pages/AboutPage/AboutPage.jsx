import React from 'react';
import './AboutPage.css';
import Card from '../../components/Tile/Card';
import Navbar from "../../components/Navbar/Navbar";
import proficpic from '../../components/images/pic.jpeg';
import ContactList from '../../components/ContactList/ContactList';
import Footer from '../../components/Footer/Footer';

function AboutPage() {
  return (
    <div className='main-card'>
      <Navbar />
      <Card
        img={proficpic}
        header={"About Me"}
        subheader={"I am Pooja Talele"}
        text={"I'm 22 years old and a Computer Science Student,I am self-motivated highy work Enthusiast guy.During my college life I gained lot of technical knowledge in field of Android App developement, Machine learning/ Deep learning and many more skills as well.I am Google DSC leader, CO-founder at Muffito and CO-founder at Crackhire INC. I am Machine learning developer as well at Crackhire.I am interested in playing with data and working with them and also, I am much interested in Working with a team of highy motivated individual."}
      />
      <ContactList />
      <Footer />
    </div>
  );
}

export default AboutPage;