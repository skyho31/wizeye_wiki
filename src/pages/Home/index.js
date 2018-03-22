import React from 'react';
import { Installation, MainDoor } from './Contents';

const Home = (props) => {
  return (
    <div className="home_container">
      <MainDoor />
      <Installation />
    </div>
  );
};

export default Home;
