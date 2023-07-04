import "./list.css";
import React, { useState } from "react";
import Navbar from "../../Component/Navbarmenu/Navbar";
import Testimonial from "../../Component/testimonial/Testmonial";
import { Container, Row, Col } from "reactstrap";
import CareerPage from "../../Component/career/Career";


const collegebyid = ({uni}) => {
  

  return (
    <div>
      <Navbar />
    
    
        <div className='emptyList-wrapS'>
      <img src={"http://localhost:3000" + uni.image} alt='empty' />
      </div>
      <h1 className="Uniheading">{uni.name}</h1>

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <button className="sidebuttton"><a href='#overview'>Overview</a></button>
              <button className="sidebuttton"><a href='#location'>Location</a></button>
              <button className="sidebuttton"><a href='#contact'> Contact</a></button>
              <button className="sidebuttton"> <a href='#Major'>Major</a></button>
              <button className="sidebuttton"> <a href='#admission'> Admission</a></button>
              <button className="sidebuttton"><a href='#tuition'> Tuition and fees</a></button>
            </div>
            <button ><a href="https://apply.commonapp.org/login?ma=327&tref=3003" style={{"text-decoration":"none","color":"white"}}>Apply form</a></button>
          </div>
          <div className="listResult">
         
            <div className="searchItem">
            <div className="siDesc">
              <h1 className="siTitle " id="overview">overview</h1>
              <span className="siDistance">{uni.overview}</span>
              {/* <span className="siTaxiOp">Free airport taxi</span>  */}
              
            </div>
            </div>

            <div className="searchItem">
            <div className="siDesc">
              <h1 className="siTitle location" id="location">Location</h1>
              <span className="siDistance">{uni.location}</span>
              
            </div>
            </div>

            <div className="searchItem">
            <div className="siDesc">
              <h1 className="siTitle" id="contact">contact</h1>
              <span className="siDistance">{uni.phone}</span>
               <span className="siSubtitle">{uni.types}</span>
              
            </div>
            </div>
           

            <div className="searchItem">
            <div className="siDesc">
              <h1 className="siTitle" id="major">Major</h1>
              <span className="siDistance">{uni.major}</span>
               
            
            </div>
            </div>
            <div className="searchItem">
            <div className="siDesc">
              <h1 className="siTitle " id="admission">Admission</h1>
              
              <span className="siDistance">{uni.admission}</span>
          
            </div>
            </div>
             <div className="searchItem">
            <div className="siDesc">
              <h1 className="siTitle "id="tuition">Tution and fees</h1>

              <span className="siDistance">{uni.fees}</span>
              {/* <div className="siRating">kk</div> */}
              {/* <span className="siTaxiOp">Free airport taxi</span>  */}
              {/* <span className="siSubtitle">Bsc.Hons computing</span> */}
            </div>
          
            </div> 

          
        
          
          
            
          </div>
          
          
        </div>
        
      </div>
      
        
            
      <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              {/* <h6 className="section__subtitle">Experts</h6> */}
              {/* <h2 className="siTitle "></h2>
              <h1 className="Uniheading">Academic Programs</h1> */}
            </Col>
            <CareerPage/>
          </Row>
        </Container>
          
         
       
      
    </div>
  
  );
};

export default collegebyid;
