import "./list.css";
import Header from "../../Component/Header/Header";
import Helmet from "../../Component/Helmet";
import Navbar from "../../Component/Navbarmenu/Navbar";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../../Component/commonsection/Commonsection";
import HeroSection from "../../Component/Hero-section/HeroSection";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../Component/searchItem/SearchItem";


const collegebyid = () => {


  return (
    <div>
<Navbar/>
      
      {/* <HeroSection/> */}
      <Helmet title="Signup">
        <section className="p-0">
          <CommonSection title="Choose your best style here" />
        </section>
      
      </Helmet>


      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Majors</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                  
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                   
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                   
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div> 
          <div className="listResult">
          <div className="searchItem">
      {/* <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      /> */}
      <div className="siDesc">
        <h1 className="siTitle">overview</h1>
        <span className="siDistance">Dilibazar Kathmandu</span>
        {/* <span className="siTaxiOp">Free airport taxi</span>  */}
        <span className="siSubtitle">Bsc.Hons computing</span>
      </div>
      <div className="siDetails">
        <div className="siRating"></div>
        <div className="siDetailTexts">
          <button className="siCheckButton">
            {/* <Link to={"/Collegebyid"}>Apply now</Link> */}
          </button>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default collegebyid;