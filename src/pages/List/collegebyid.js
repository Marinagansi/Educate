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
      <Navbar />

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
              <button>overview</button>
              <button>Location</button>
              <button>Academic programs</button>
              <button>Major</button>
              <button>Admisions</button>
              <button>Tuition and Fees</button>
            </div>
            <button>Apply form</button>
          </div>
          <div className="listResult">
         
            <div className="searchItem">
            <div className="siDesc">
              <h1 className="siTitle">overview</h1>
              <span className="siDistance">Dilibazar Kathmandu</span>
              {/* <span className="siTaxiOp">Free airport taxi</span>  */}
              <span className="siSubtitle">Bsc.Hons computing</span>
            </div>
            </div>

            <div className="searchItem">
            <div className="siDesc">
              <h1 className="siTitle">Location</h1>
              <span className="siDistance">Dilibazar Kathmandu</span>
              {/* <span className="siTaxiOp">Free airport taxi</span>  */}
              <span className="siSubtitle">Bsc.Hons computing</span>
            </div>
            </div>

            <div className="searchItem">
            <div className="siDesc">
              <h1 className="siTitle">Academic programs</h1>
              <span className="siDistance">Dilibazar Kathmandu</span>
              {/* <span className="siTaxiOp">Free airport taxi</span>  */}
              <span className="siSubtitle">Bsc.Hons computing</span>
            </div>
            </div>
           

            <div className="searchItem">
            <div className="siDesc">
              <h1 className="siTitle">Major</h1>
              <span className="siDistance">Dilibazar Kathmandu</span>
              {/* <span className="siTaxiOp">Free airport taxi</span>  */}
              <span className="siSubtitle">Bsc.Hons computing</span>
            </div>
            </div>
            <div className="searchItem">
            <div className="siDesc">
              <h1 className="siTitle">Admission</h1>
              <span className="siDistance">Dilibazar Kathmandu</span>
              {/* <span className="siTaxiOp">Free airport taxi</span>  */}
              <span className="siSubtitle">Bsc.Hons computing</span>
            </div>
            </div> <div className="searchItem">
            <div className="siDesc">
              <h1 className="siTitle">Tution and fees</h1>
              <span className="siDistance">Dilibazar Kathmandu</span>
              {/* <span className="siTaxiOp">Free airport taxi</span>  */}
              <span className="siSubtitle">Bsc.Hons computing</span>
            </div>
            </div> 
           
            {/* <div className="siDesc">
              <h1 className="siTitle">overview</h1>
              <span className="siDistance">Dilibazar Kathmandu</span>
             
              <span className="siSubtitle">Bsc.Hons computing</span>
            </div> */}
 
            {/* <div className="siDetails">
              <div className="siRating"></div>
              <div className="siDetailTexts">
                <button className="siCheckButton"> */}
                  {/* <Link to={"/Collegebyid"}>Apply now</Link> */}
                {/* </button>
              </div>
            </div> */} 
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default collegebyid;
