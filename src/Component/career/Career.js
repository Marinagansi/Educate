import React from 'react';

import courseImg1 from "../../assets/images/WebDesign.jpg";
import courseImg2 from "../../assets/images/ux design.jpg";
import courseImg3 from "../../assets/images/ui design.jpg";
import courseImg4 from "../../assets/images/WebDesign.jpg";
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './career.css';

const OUR__MEMBERS = [
  {
    name: 'Jhon Doe',
    experience: 'wide range of programs, classes, internships, and an entire online high school. ',
    imgUrl:courseImg1,
  },

  {
    name: 'David Lisa',
    experience: 'Our world-class faculty challenge young people to explore and achieve – through STEM research, internationally focused courses, and arts experiences.',
    fbUrl: '#',
    instUrl: '#',
    twitUrl: '#',
    linkedinUrl: '#',
    fbUrl: '#',
    instUrl: '#',
    twitUrl: '#',
    linkedinUrl: '#',
    imgUrl: courseImg2,
  },

  {
    name: 'Hilton King',
    experience: 'Learn from our expert faculty as you grow your knowledge in your professional sphere or prepare to pivot into a new career.',
    fbUrl: '#',
    instUrl: '#',
    twitUrl: '#',
    linkedinUrl: '#',
    imgUrl:courseImg3,
  },

  {
    name: 'Jhon Doe',
    experience: 'Our world-class faculty challenge young people to explore and achieve – through STEM research, internationally focused courses, and arts experiences.',
    fbUrl: '#',
    instUrl: '#',
    twitUrl: '#',
    linkedinUrl: '#',
    fbUrl: '#',
    instUrl: '#',
    twitUrl: '#',
    linkedinUrl: '#',
    imgUrl:courseImg4,
  },
];

const career = () => {
  return (
    <>
    <h1 className="Uniheading">Academic programs</h1>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" className="mb-4" key={index}>
          <div className="single__member">
            <div className="single__member__img">
              <img src={item.imgUrl} alt="" className="w-100" />
              <div className="single__member__social">
                
                
                
              </div>
            </div>

            {/* <h6 className="text-center mb-0 mt-3 header" >{item.name}</h6> */}
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default career;
