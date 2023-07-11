import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import "./Button.css";


function Button() {
  const navigate = useNavigate();


  const logout = () => {
    window.localStorage.removeItem("token");
      navigate("/signup");
    
  }
  const Button=()=>{
    if (window.localStorage.getItem("token")) {
      return (
        <button className="btn" onClick={logout}>Logout</button>
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

    <div className="button">
      <Button/>
    </div>
  );
}

export default Button;