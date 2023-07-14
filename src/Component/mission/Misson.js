import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./mission.css";
import courseImg1 from "../../assets/images/mission.jpg";
import vision from "../../assets/images/vision.png";
import goal from "../../assets/images/goal.jpeg";

const FeatureData = [
  {
    img:courseImg1,
    title: "mission",
    desc: "We're working to turn our passion for service provide college information to students into a booming online website",
    icon: "ri-draft-line",
  },

  {
    img:vision,
    title: "vision",
    desc:"We hope to transform our enthusiasm for helping kids find college information online into a successful business.",
    icon: "ri-discuss-line",
  },

  {
    img:goal,
    title: "goal",
desc:"We want to turn our passion for guiding students in their search for college information online into a profitable business.",
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
              <img src={item.img} alt="" className="img" />
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
