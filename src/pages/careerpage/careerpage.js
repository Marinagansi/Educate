import "../List/list.css";
import Header from "../../Component/Header/Header";
import Helmet from "../../Component/Helmet";
import Navbar from "../../Component/Navbarmenu/Navbar";
import { Container, Row, Col } from "reactstrap";
import ExploreSection from "../../Component/commonsection/exploresection";
import HeroSection from "../../Component/Hero-section/HeroSection";
import CareerPage from "../../Component/career/Career";

const Career=()=>{


    return (
      <div>
  <Navbar/>
        
        {/* <HeroSection/> */}
        <Helmet title="Signup">
          <section className="p-0">
            <ExploreSection title="career" />
          </section>
          <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              {/* <h6 className="section__subtitle">Experts</h6> */}
              <h2 className="section__title">Career explore</h2>
            </Col>
            <CareerPage/>
          </Row>
        </Container>
         
        
        </Helmet>
  
  
        
      </div>
    );
  };
  
export default Career;