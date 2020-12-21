import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import about1 from "../../assets/images/logo-coin.svg";
import about2 from "../../assets/images/resources/about-1-1.jpg";
import about3 from "../../assets/images/resources/about-1-2.jpg";
import pension from "../../assets/images/dbLogo-dark.svg";

const AboutOne = () => {
  return (
    <section className="about-one pt-120 pb-40">
      <Container>
        <Row>
          <div className="about-one__award">
            <img src={about1} width='100' alt="" />
          </div>
          <Col lg={6}>
            <img src={about2} alt="" className="img-fluid" />
          </Col>
          <Col lg={6}>
            <img src={about3} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="team-about__top mt-60">
          <Row>
            <Col md={12} lg={4}>
              <div className="block-title">
                <p>
                  <img src={pension} width="35" alt="" />
                  Make a Difference
                </p>
                <h3>Knowledge is the key to a stress-free financial plan .</h3>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <p className="team-about__top-text">
              We at Dugan Brown believe that every individual has the right 
              to enjoy a stress-free retirement. Every person, young or old, 
              no matter their background, deserves to fully understand what 
              benefits they have available to them. 
              </p>
            </Col>
            <Col md={12} lg={4}>
              <p className="team-about__top-text">
              Every employee should have  unrestricted access to resources that 
              provide them with simple and easy-to-understand explanations of 
              strategies in order to maximize their retirement.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutOne;
