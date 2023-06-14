// import React , {useRef,useState}from "react";
// import React from "react";
import { Container } from "reactstrap";
import { Link, NavLink } from 'react-router-dom';
import "./header.css";

// const navLinks = [
//   {
//     display: "Home",
//     url: "/",
//   },
//   {
//     display: "Plan for college",
//     url: "/college",
//     // dropdown: [
//     //   {
//     //     display: "Admissions",
//     //     url: "/college/admissions",
//     //   },
//     //   {
//     //     display: "Scholarships",
//     //     url: "/college/scholarships",
//     //   },
//     //   // Add more dropdown items as needed
//     // ],
//   },
//   {
//     display: "About",
//     url: "#",
//   },

//   {
//     display: "Courses",
//     url: "#",
//   },
//   {
//     display: "Pages",
//     url: "#",
//   },
//   {
//     display: "Blog",
//     url: "#",
//   },
// ];

// const Header = () => {
//   const menuRef = useRef();

//   const menuToggle = () => menuRef.current.classList.toggle("active__menu");

//   return (
//     <header className="header">
//       <Container>
//         <div className="navigation d-flex align-items-center justify-content-between">
//           <div className="logo">
//             <h2 className=" d-flex align-items-center gap-1">
//               <i class="ri-pantone-line"></i>Educate.
//             </h2>
//           </div>

//           <div className="nav d-flex align-items-center gap-5">
//             <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
//             <div className="nav__menu"  onClick={menuToggle}>
//               <ul className="nav__list">
//                 {navLinks.map((item, index) => (
//                   <li key={index} className="nav__item">
//                     <a href={item.url}>{item.display}</a>
                    
//                   </li>
               
                  
//                 ))}
                
//               </ul>
//             </div>
// {/* 
//             <div className="nav__right">
//               <p className="mb-0 d-flex align-items-center gap-2">
//                 <i class="ri-phone-line"></i> +88 0123456789
//               </p>
//             </div> */}
//           </div>

//           <div className="mobile__menu">
//             <span>
//               <i class="ri-menu-line" onClick={menuToggle}></i>
//             </span>
//           </div>
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Header;
import React, { useRef, useState } from "react";
// import { Container } from "reactstrap";
// import "./header.css";

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "Plan for college",
    url: "/college",
    dropdown: [
      {
        display: "Admissions",
        url: "/college/admissions",
      },
      {
        display: "Scholarships",
        url: "/college/scholarships",
      },
      // Add more dropdown items as needed
    ],
  },
  {
    display: "About",
    url: "/college",
  },
  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Pages",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();
  const [activeMenu, setActiveMenu] = useState(null);

  const menuToggle = () => {
    menuRef.current.classList.toggle("active__menu");
    setActiveMenu(null);
  };

  const handleDropdown = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i>Educate.
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a
                      href={item.url}
                      onClick={(e) => {
                        e.preventDefault();
                        handleDropdown(index);
                      }}
                      className={
                        activeMenu === index ? "active" : ""
                      }
                    >
                      {item.display}
                    </a>
                    {item.dropdown && activeMenu === index && (
                      <ul className="dropdown__list">
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex} className="dropdown__item">
                            <a href={subItem.url}>{subItem.display}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
