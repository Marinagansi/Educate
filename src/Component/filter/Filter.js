import React from 'react';
import './filter.css';
import location from "../../assets/images/location.png";
import Type from "../../assets/images/major.png";
import Major from "../../assets/images/major1.png";

const ThreeColumnLayout = () => {
  return (
    <div className="container-filter">
    <div className="column-filter">
      <img src={location} alt="Image 1" style={{width:60}}/>
      <h3>location</h3>
    </div>
    <div className="column-filter">
      <img src={Major} alt="Image 2" style={{width:87}} />
      <h3>Major</h3>
    </div>
    <div className="column-filter">
      <img src={Type} alt="Image 3" style={{width:77}} />
      <h3>Type</h3>
    </div>
  </div>
  );
};

export default ThreeColumnLayout;