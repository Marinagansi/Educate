import React from 'react';
import './commonsection.css';

const CommonSection = ({ title }) => {
    return (
        <div className="appoint__section text-center mb-5">
          <h2 className="section__title text-light">{title}</h2>
        </div>
      );
};
export default CommonSection;