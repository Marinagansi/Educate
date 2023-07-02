import React from 'react';
import './commonsection.css';
import { SearchBar } from "../../Component/Universities/Searchbar.js";

const UniSection = ({ title }) => {
    return (
        <div className="uni__section  ">
          <SearchBar />
          {/* <h2 className="section__title ">{title}</h2> */}
        </div>
      );
};
export default UniSection;