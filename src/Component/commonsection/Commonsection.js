import React,{useState, useEffect} from 'react';
import './commonsection.css';
import { SearchBar } from "../../Component/Universities/Searchbar.js";

const CommonSection = ({ title,uni,setuni }) => {



  
    return (
        <div className="appoint__section text-center mb-5">
          <SearchBar uni={uni} setuni={setuni}/>
          <h2 className="section__title ">{title}</h2>
        </div>
      );
};
export default CommonSection;