import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assets/images/WebDesign.jpg";
import courseImg2 from "../../assets/images/ux design.jpg";
import courseImg3 from "../../assets/images/ui design.jpg";
import "./event.css";
import CourseCard from "./eventcard";

const eventsData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

const Events = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50" id="event">  
                <h2>Our Upcoming Events</h2>
                <p>
                we will provide you only interesting content, which you will like very much. We hope you enjoy our events as much as we enjoy offering them to you
                </p>
              </div>

              <div className="w-50 text-end">
                {/* <button className="btn" >See All</button> */}
              </div>
            </div>
          </Col>
          {eventsData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Events;