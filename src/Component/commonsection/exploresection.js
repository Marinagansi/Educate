import React from 'react';
import './commonsection.css';

const ExploreSection = ({ title }) => {
    return (
        <div className="career__section text-center mb-5">
          <h2 className="section__title text-light" style={{"color":"black"}}>{title}</h2>
        </div>
      );
};
export default ExploreSection;