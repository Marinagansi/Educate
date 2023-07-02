import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import chooseImg from "../../assets/images/chooseus.jpg";
import "./choose-us.css";
import { FaPlay} from "react-icons/fa";
import 'font-awesome/css/font-awesome.min.css'

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
                Educate is a Professional service provide college information to
                students Platform. Here we will provide you only interesting
                content, which you will like very much. . We're working to turn
                our passion for service provide college information to students
                into a booming online website. We hope you enjoy our service
                provide college information to students as much as we enjoy
                offering them to you.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://youtu.be/hcrKatB2BfE"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="fa-map-marker "
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
