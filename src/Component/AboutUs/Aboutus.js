import React, { useEffect, useState } from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/images/aboutus.jpg";
import CountUp from "react-countup";
import "./about.css";

import { Visible } from "react-visible";

const AboutUs = () => {
  
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionPosition = document.querySelector(".about__content").offsetTop;
      const windowHeight = window.innerHeight;

      setIsVisible(scrollPosition + windowHeight > sectionPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img" >
              <img src={aboutImg} alt="" style={{ height: "350px",width:"650px" }} />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
                We're dedicated to providing you the best of service provide
                college information to students , with a focus on dependability
                and Online college apply and view details!
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
