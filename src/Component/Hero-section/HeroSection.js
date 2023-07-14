import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/educatelogo.png";
import "./herosection.css";
import { Link , useNavigate} from 'react-router-dom';
const HeroSection = () => {

  const navigate = useNavigate();
  const joinNow= (e) => {
    navigate("/uni");
  }

  const StartNow= (e) => {
    navigate("/signup");
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
              Education is your right  <br /> take it now!<br /> 
              </h2>
              <p className="mb-5">
              Better education equals a better nation. <br /> 
               Education is the key to unlocking the world,<br/>
                It is passport to freedom!
              </p>
            </div>
            <div className="search">
              {/* <input type="text" placeholder="Search" /> */}
              <button className="btn" style={{width:240}} onClick={joinNow}>Join Now</button>
              {/* <button className="btn"style={{width:120}} onClick={StartNow}>Start</button> */}
            </div>
          </Col>

          <Col lg="6" md="6" style={{ "justify-content": "left !important"}}>
            <img src={heroImg} alt="" className="w-110 hero__img" style={{'margin-left':'180px','height':'90% '}} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;