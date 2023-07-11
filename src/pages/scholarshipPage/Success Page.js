import { useState } from "react";
import "./scholarPage.css";
import FormInput from "../../Component/Scholarship/Forminput";
import Navbar from "../../Component/Navbarmenu/Navbar";
import {message} from 'antd';
import { Link , useNavigate} from 'react-router-dom';
import axios from "axios";

const Scholarship = () => {
  
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
   
        navigate("/");
   

}

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };


  return (
    <>
    <Navbar/>
    <div className="Scholarship">
      <form  className="forms" onSubmit={handleSubmit} style={{    "background-color": "white",
      "padding": "0px 60px",
      "border-radius": "10px"}}>
        <h1 classname="h1">Thank you!</h1>
        <p>Your application is received</p>
    
        
        <button className="sbtn">Go Back</button>
      </form>
    </div>
    </>
  );
};

export default Scholarship;