import React,{Fragment} from "react";
import HeroSection  from "../../Component/Hero-section/HeroSection.js";
import Header from "../../Component/Header/Header.js";
import AboutUs from "../../Component/AboutUs/Aboutus.js"
import Event  from "../../Component/Event/event.js";
import ChooseUs from "../../Component/ChooseUs/Chooseus.js";
import Mission from "../../Component/mission/Misson.js";
import Footer  from "../../Component/Footer/footer.js";
import Navbarmenu from "../../Component/Navbarmenu.js";
import "bootstrap/dist/css/bootstrap.css";
import "./home.css";



const Home =() =>{
    return(
    <Fragment>
    <Header />
    {/* <Navbarmenu/> */}
    <HeroSection/>
    <AboutUs/>
    <Event/>
    <ChooseUs />
    <Mission />
     <Footer /> 
    </Fragment>
     
    );
};
export default Home;