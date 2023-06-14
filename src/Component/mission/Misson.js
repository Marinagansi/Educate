import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./mission.css";

const FeatureData = [
  {
    title: "mission",
    desc: "We're working to turn our passion for service provide college information to students into a booming online website",
    icon: "ri-draft-line",
  },

  {
    title: "vision",
    desc: "We're working to turn our passion for service provide college information to students into a booming online website",
    icon: "ri-discuss-line",
  },

  {
    title: "goal",
    desc: "We're working to turn our passion for service provide college information to students into a booming online website",
    icon: "ri-contacts-book-line",
  },
  
 
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
