import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Body from '../../components/Body/Body';
import MySkills from '../SkillPage/SkillPage';
import MyProjects from '../ProjectPage/ProjectPage';
import Footer from '../../components/Footer/Footer';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Body />
      <MySkills />
      <MyProjects />
      <Footer />
    </div>
  );
}

export default HomePage;
