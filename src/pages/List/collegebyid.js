import "./list.css";
import React from "react";
import { useState } from "react";
import Navbar from "../../Component/Navbarmenu/Navbar";
import Testimonial from "../../Component/testimonial/Testmonial";
import { Container, Row, Col } from "reactstrap";
import CareerPage from "../../Component/career/Career";
import Footer from "../../Component/Footer/footer";
import { Link , useNavigate} from 'react-router-dom';



const Collegebyid = ({uni}) => {

  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
// Get all the buttons
const buttons = document.querySelectorAll('.sidebuttton');

// Add click event listener to each button
buttons.forEach((button) => {
  button.addEventListener('click', function () {
    // Remove the active class from all buttons
    buttons.forEach((btn) => {
      btn.classList.remove('active');
      btn.querySelector('a').classList.remove('active-link');
    });

    // Add the active class to the clicked button
    this.classList.add('active');
    this.querySelector('a').classList.add('active-link');

    // Set the active section based on the href attribute
    const href = this.querySelector('a').getAttribute('href');
    const sectionId = href.substring(1);
    setActiveSection(sectionId);
  });
});



// Highlight the button based on the current section
window.addEventListener('scroll', function() {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Get all the section containers
  const sections = document.querySelectorAll('.searchItem');

  // Loop through each section and check if it is in the viewport
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Remove the active class from all buttons
      buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.querySelector('a').classList.remove('active-link');
      });

      // Get the button corresponding to the current section
      const button = document.querySelector(`.sidebuttton a[href="#${section.id}"]`);
      
      if (button) {
        // Add the active class to the corresponding button
        button.parentElement.classList.add('active');
        button.classList.add('active-link');
      }
    }
  });
});


const applyform = () => {
  if (window.localStorage.getItem("token") === null) {
    navigate("/signup");
  }
 else {
//     window.location.href = "https://applicantportal.coventry.ac.uk/s/login/?ec=302&startURL=%2Fs%2F";
window.open("https://applicantportal.coventry.ac.uk/s/login/?ec=302&startURL=%2Fs%2F", "_blank");
 }
}


//     window.location.href = "https://applicantportal.coventry.ac.uk/s/login/?ec=302&startURL=%2Fs%2F";
  return (
    <div>
      <Navbar />
    
    
        <div className='emptyList-wrapS'>
        <Link className='blog-goBacks' to='/uni' >
        <i class="fa-sharp fa-solid fa-hand-point-left"></i> <span>Go Back</span>
      </Link>
      <img src={"http://localhost:3000" + uni.image} alt='empty' />
      </div>
      <h1 className="Uniheading">{uni.name}</h1>

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <button className="sidebuttton active"><a href='#overview'>Overview</a></button>
              <button className="sidebuttton"><a href='#location'>Location</a></button>
              <button className="sidebuttton"><a href='#contact'> Contact</a></button>
              <button className="sidebuttton"> <a href='#Major'>Major</a></button>
              <button className="sidebuttton"> <a href='#admission'> Admission</a></button>
              <button className="sidebuttton"><a href='#tuition'> Tuition and fees</a></button>
            </div>
            <button onClick={applyform} >Apply form</button>
            {/* <a href="https://applicantportal.coventry.ac.uk/s/login/?ec=302&startURL=%2Fs%2F" style={{"text-decoration":"none","color":"white"}}>Apply form</a>  */}
          </div>
          <div className="listResult">
         
          <div id="overview-section" className={`searchItem ${activeSection === 'overview' ? 'active-section' : ''}`}>
            <div className="siDesc">
              <h1 className="siTitle " id="overview">overview</h1>
              <span className="siDistance"> {uni.overview}</span>
              {/* <span className="siTaxiOp">Free airport taxi</span>  */}
              
            </div>
            </div>

            <div  id="location-section" className={`searchItem ${activeSection === 'location' ? 'active-section' : ''}`}>
            <div className="siDesc">
              <h1 className="siTitle location" id="location">Location</h1>
              <span className="siDistance"><i class="fa-sharp fa-solid fa-location-dot"></i> {uni.location}</span>
              
            </div>
            </div>

            <div  id="contact-section" className={`searchItem ${activeSection === 'contact' ? 'active-section' : ''}`}>
            <div className="siDesc">
              <h1 className="siTitle" id="contact">contact</h1>
              <span className="siDistance"><i class="fa-sharp fa-solid fa-phone"></i> { uni.phone} { uni.link}</span>
               <span className="siSubtitle"><i class="fa-sharp fa-solid fa-envelope"></i> { uni.types}</span>
              
            </div>
            </div>
           

            <div  id="Major-section" className={`searchItem ${activeSection === 'Major' ? 'active-section' : ''}`}>
            <div className="siDesc">
              <h1 className="siTitle" id="Major">Major</h1>
              <span className="siDistance"><i class="fa-sharp fa-solid fa-book-open-reader"></i> {uni.major}</span>
               
            
            </div>
            </div>
            <div  id="admission-section" className={`searchItem ${activeSection === 'admission' ? 'active-section' : ''}`}>
            <div className="siDesc">
              <h1 className="siTitle " id="admission">Admission</h1>
              
              <span className="siDistance"><i class="fa-sharp fa-solid fa-ticket"></i> {uni.admission}</span>
          
            </div>
            </div>
             <div  id="tution-section" className={`searchItem ${activeSection === 'tuition' ? 'active-section' : ''}`}>
            <div className="siDesc">
              <h1 className="siTitle"id="tuition"> Tution and fees</h1>

              <span className="siDistance"><i class="fa-sharp fa-solid fa-money-check"></i> {uni.fees}</span>
              
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
          
         
       <Footer/>
      
    </div>
  
  );
};

export default Collegebyid;
