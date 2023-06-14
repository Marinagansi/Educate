import React, { useRef,useState } from "react";
import { Link,NavLink,useLocation } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";

function Navbar() {
  const location=useLocation();
  const [dropdown, setDropdown] = useState(false);
  const [state,setState]=useState({clicked:false})
  const menuRef = useRef();
  // Search
      
 
   const menuToggle = () => menuRef.current.classList.toggle('menu__active');
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Educate.
          {/* <Icons.FaTree /> */}
        </Link>
        <ul className={state.clicked ? "nav-items active " :"nav-items"}  ref={menuRef} onClick={menuToggle}>
          {navItems.map((item,index) => {
            const isActive=location.pathname===item.path
            if (item.title === "Plan for college") {
              return (  
                <li
                  key={index}
                  className={isActive? `${item.cName} active`:item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link className={isActive? `${item.cName} active`:item.cName}  to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              
              <li key={index} className={isActive? `${item.cName} active`:item.cName}>
                <Link className={isActive? `${item.cName} active`:item.cName }
                    key={index}
                to={item.path}>{item.title} </Link>
              </li>
            );
            
          })}
            <Button />
        </ul>
      
      </nav>
    </>
  );
}

export default Navbar;