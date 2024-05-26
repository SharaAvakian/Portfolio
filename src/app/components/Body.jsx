import React from 'react';
import './Body.css';
import Skills from './Skills';
import Studies from './Studies';
import Job from './Job';
import Hobbies from './Hobbies';
import myPicture from '../../../public/SharaAvakian.jpg';
const Body = () => {
  return (
    <div className="body-container">
      <div className="content">
        <div className="top-section">
          <h2 className="name">Shara Avakian</h2>
          <img src={myPicture} alt="Shara Avakian" className="picture" />
        </div>
        <div className="cards">
          <Skills />
          <Studies />
          <Job />
          <Hobbies />
        </div>
      </div>
    </div>
  );
};

export default Body;
