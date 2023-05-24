import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/educatelogo.png";
import "./herosection.css";

const HeroSection = () => {

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
              <button className="btn" style={{width:240}}>Join Now</button>
              <button className="btn"style={{width:120}}>Start</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-110 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;