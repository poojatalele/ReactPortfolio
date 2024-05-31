import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Body from '../../components/Body/Body';
import MySkills from '../../components/MySkills/MySkills';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Body />
      <MySkills />
    </div>
  );
}

export default HomePage;
