import { useState } from "react";
import "./scholarPage.css";
import FormInput from "../../Component/Scholarship/Forminput";
import Navbar from "../../Component/Navbarmenu/Navbar";
import {message} from 'antd';
import { Link , useNavigate} from 'react-router-dom';
import axios from "axios";

function ApplyButton() {
  const navigate = useNavigate();


  const logout = () => {
    window.localStorage.removeItem("token");
      navigate("/signup");
    
  }
  const applyform = () => {

      navigate("/scholarship");
    
  }
  
  const ApplyButton=()=>{
    if (window.localStorage.getItem("token")) {
      return (
        <button className="btn" onClick={applyform}>Apply form</button>
      );
    }
    else {
      return (
        <Link to="/signup">
          <button className="btn" onClick={logout}>Sign Up</button>
        </Link>
      );
    }
    
}

  return (
    <>
    <Navbar/>
    <div className="Scholarship">
      <form  className="forms" style={{    "background-color": "white",
      "padding": "0px 60px",
      "border-radius": "10px"}}>
        <h1 classname="h1"> scholarship</h1>
        <p>To Apply for the scholarship, interested students must meet certain criteria and submit an application.<br/> 
          The selection process will then take place to choose the deserving candidates.</p>
    
 
        <ApplyButton/>
        {/* <button className="sbtn">Sign in</button> */}
      </form>
      
    </div>
 
    </>
  );
};

export default ApplyButton;